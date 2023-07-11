import React, { useState } from "react";

import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Button,
  InputLabel,
} from "material-ui";

import PropTypes from "prop-types";

import { regularCardStyle } from "variables/styles";

import getApiData from "../../model/apiData";

import getBatchData from "../../model/batchData";

const url = "http://192.168.1.229:8000/dailymonitor/apis";

const apiData = getApiData();

function ProcessResult(result) {
  let dataArray = result.body["data"];

  dataArray.forEach((value) => {
    console.log(value);
  });
}

function RegularCard(props) {
  const { classes, headerColor, plainCard, cardTitle, cardSubtitle, content } =
    props;

  const onClickHandler = async () => {
    await fetch(url)
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => ProcessResult(obj));
  };

  const batchUrl = "http://192.168.1.229:8000/v2/test/batch";

  const batchData = getBatchData();

  const [allApiData, setAllApiData] = useState([]);

  console.log(allApiData);

  const handleBatchTest = (event) => {
    event.preventDefault();

    // Perform the batch API request using fetch or Axios
    fetch(batchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(batchData),
    })
      .then((responseData) => responseData.json())
      .then((batchData) => {
        // Handle the response from the server

        console.log(batchData);

        setAllApiData(batchData);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setAllApiData(error);
      });
  };

  return (
    <Card className={classes.card + (plainCard ? " " + classes.cardPlain : "")}>
      <CardHeader
        classes={{
          root:
            classes.cardHeader +
            " " +
            classes[headerColor + "CardHeader"] +
            (plainCard ? " " + classes.cardPlainHeader : ""),

          title: classes.cardTitle,
          subheader: classes.cardSubtitle,
        }}
        title={cardTitle}
        subheader={cardSubtitle}
        action={
          <div>
            <InputLabel
              style={{
                marginRight: "2em",
                color: "#ffffff",
              }}
            >
              Base URL
            </InputLabel>

            <select
              onChange={(e) => {
                console.log("value: ", e.target.value);
              }}
              style={{ marginRight: "200px", marginTop: "15px" }}
            >
              Select base urls:
              {apiData[0].baseUrl.map((urls) => {
                // return <option>{baseUrl + apiLink}</option>;
                return <option>{urls}</option>;
              })}
            </select>

            {/* <Button
              style={{
                color: "white",
                backgroundColor: "white",
                color: "black",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              // onClick={onClickHandler}
              onClick={onClickHandler}
            >
              Run All
            </Button> */}
          </div>
        }
      />

      <CardContent>{content}</CardContent>
    </Card>
  );
}

RegularCard.defaultProps = {
  headerColor: "red",
};

RegularCard.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
};

export default withStyles(regularCardStyle)(RegularCard, ProcessResult);
