import { Card, Grid } from "material-ui";

import {
  RegularCard,
  Table as CardTable,
  ItemGrid,
  ProcessResult,
} from "components";

import React, { useEffect, useState } from "react";
// import axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import getApiData from "../../model/apiData";

const apiData = getApiData();

console.log(apiData[0].apis[0].apiLink);

function DailyMonitoringList() {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const [username, setUsername] = useState("saurabh.singh@enginecal.com");
  const [password, setPassword] = useState("123456");

  const [currentApi, setCurrentApi] = useState(
    "core/v1/bike-intell/checklogin"
  );
  const [respData, setResponseData] = useState([]);

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform the login API request using fetch or Axios
    fetch("http://evaaidev.enginecal.com/core/v1/bike-intell/checklogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ u: username, p: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        let resp = [];
        resp["status"] = data["success"];
        resp["message"] = JSON.stringify(data);
        setResponseData(resp);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        let resp = [];
        resp["status"] = false;
        resp["message"] = JSON.stringify(error);
        setResponseData(resp);
      });
  };

  const [forgetEmail, setForgetEmail] = useState("test@enginecal.com");
  const [forgetPassword, setForgetPassword] = useState("123@Ecal");

  const handleForgetPassword = (event) => {
    event.preventDefault();

    // Perform the forgot API request using fetch or Axios
    fetch("https://evaai.enginecal.com/core/v1/bike-intell/forgetpass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: forgetEmail, password: forgetPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        let resp = [];
        resp["status"] = data["status"];
        resp["message"] = JSON.stringify(data);
        setResponseData(resp);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        let resp = [];
        resp["status"] = false;
        resp["message"] = JSON.stringify(error);
        setResponseData(resp);
      });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };

  const handleApi = (event) => {
    event.preventDefault();
    switch (currentApi) {
      case "core/v1/bike-intell/checklogin":
        handleLogin(event);
        console.log("handle login :" + handleLogin);
        break;
      case "core/v1/bike-intell/forgetpass":
        handleForgetPassword(event);
        break;
    }
  };
  // Create default API of the select option
  const [selectedOption, setSelectedOption] = useState(
    apiData[0].apis[0].apiLink
  );

  // handle default API of the select option
  const handleOptionChange = (event) => {
    console.log("event.trgt = " + event.target.value);
    setSelectedOption(event.target.value);
    setCurrentApi(event.target.value);
  };

  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="SYSTEM"
          content={
            <CardTable
              tableHeaderColor="primary"
              tableHead={["API", "Tests", "Status", "Message"]}
              tableData={[
                [
                  <div>
                    <div>
                      <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        style={{
                          marginRight: "10px",
                        }}
                      >
                        {apiData[0].apis.map((api) => {
                          return <option>{api.apiLink}</option>;
                        })}
                      </select>
                      {/* Implementation of check login */}
                      {selectedOption === apiData[0].apis[0].apiLink && (
                        <form onSubmit={handleLogin}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Email:</label>
                              <input
                                id="username"
                                type="text"
                                name="u"
                                value={username}
                                onChange={(e) => {
                                  setUsername(e.target.value);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Password:</label>
                              <input
                                id="password"
                                type="password"
                                name="p"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                          )}
                        </form>
                      )}
                      {/* Implementation of forget password */}
                      {selectedOption === apiData[0].apis[1].apiLink && (
                        <form onSubmit={handleForgetPassword}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Email:</label>
                              <input
                                id="forgetEmail"
                                type="text"
                                name="email"
                                value={forgetEmail}
                                onChange={(e) => {
                                  setForgetEmail(e.target.value);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Password:</label>
                              <input
                                id="forgetPassword"
                                type="password"
                                name="password"
                                value={forgetPassword}
                                onChange={(e) => {
                                  setForgetPassword(e.target.value);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "10px",
                                }}
                              />
                            </div>
                          )}
                        </form>
                      )}

                      <button
                        onClick={toggleInputVisibility}
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        Input
                      </button>
                    </div>
                  </div>,
                  <button
                    onClick={handleApi}
                    style={{
                      height: "30px",
                      width: "80px",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Run test
                  </button>,
                  <div style={{ alignContent: "center" }}>
                    {respData.status === undefined
                      ? "Waiting for data"
                      : respData.status === true
                      ? "Success"
                      : "Failed"}
                  </div>,
                  <div style={{ alignContent: "center" }}>
                    {respData.status === undefined
                      ? "Waiting for data"
                      : respData.message}
                  </div>,
                ],
              ]}
            />
          }
        />
      </ItemGrid>

      <div>
        <h3 align="center">Report</h3>
        <TableContainer>
          <Table
            aria-label="simple table"
            stickyHeader
            style={{ width: "1200px" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Application</TableCell>
                <TableCell align="center">API Name</TableCell>
                <TableCell align="center">URL</TableCell>
                <TableCell align="center">Method</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {apiData[0].apis.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {apiData[0].applicationName}
                  </TableCell>
                  <TableCell align="center">{row.applicationName}</TableCell>
                  <TableCell align="center">{row.apiLink}</TableCell>
                  <TableCell align="center">{row.requestMethod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Grid>
  );
}

export default DailyMonitoringList;
