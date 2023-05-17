import React from "react";

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

const url = "http://localhost:8000/dailymonitor/apis";

const apiData = getApiData();

const apiLinks = [
  "core/v1/bike-intell/checklogin",
  "event/v1/bike-intell/fileupload",
  "event",
  "core",
];

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
            >
              Select base urls:
              {apiData[0].baseUrl.map((urls) => {
                // return <option>{baseUrl + apiLink}</option>;
                return <option>{urls}</option>;
              })}
            </select>

            <Button
              style={{
                color: "white",
              }}
              onClick={onClickHandler}
            >
              Run All
            </Button>
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
