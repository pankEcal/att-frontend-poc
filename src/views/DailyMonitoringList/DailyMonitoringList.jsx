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

function DailyMonitoringList() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [username, setUsername] = useState(apiData[0].apis[0].requestParams.u);
  const [password, setPassword] = useState(apiData[0].apis[0].requestParams.p);
  const [responseData, setResponseData] = useState({});
  // Create default API of the select option
  const [selectedApiLink, setSelectedApiLink] = useState(
    apiData[0].apis[0].apiLink
  );

  const BACKEND_BASE_URL = "http://localhost:8000/";

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const handleRunTest = (event) => {
    event.preventDefault();

    const payloadApiLink = apiData[0].apis.find(
      (api) => api.apiLink === selectedApiLink
    );

    const payloadData = {
      baseUrl: "https://evaai.enginecal.com/",
      apiLink: payloadApiLink.apiLink,
      requestMethod: "POST",
      requestParams: {
        u: username,
        p: password,
      },
    };

    // Perform the login API request using fetch or Axios
    fetch(BACKEND_BASE_URL + "v2/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        setResponseData(data);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        // TODO: handle error
        setResponseData(error);
        console.log(error);
      });

    // Reset the input fields
    // setUsername("");
    // setPassword("");
  };

  // handle default API of the select option
  const handleOptionChange = (event) => {
    console.log("selected apiLink: " + event.target.value);
    setSelectedApiLink(event.target.value);
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
                        value={selectedApiLink}
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
                      {selectedApiLink === apiData[0].apis[0].apiLink && (
                        <form onSubmit={handleRunTest}>
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
                          {/* <button
                            type="submit"
                            style={{
                              marginTop: "10px",
                            }}
                          >
                            Login
                          </button> */}
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
                    onClick={handleRunTest}
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
                    {responseData.testResult === undefined
                      ? "Waiting for data"
                      : responseData.testResult.success === true
                      ? "passed"
                      : "failed"}
                  </div>,
                  <div style={{ alignContent: "center" }}>
                    {responseData.testResult === undefined
                      ? "Waiting for data"
                      : responseData.testResult.message ||
                        "missing message in server response"}
                  </div>,
                ],
              ]}
            />
          }
        />
      </ItemGrid>

      {/* TODO: Implement the result preview screen  */}
      {/* {responseData && (
        <div className="loginData">
          <h3>Test Result</h3>
          <div>
            <samp>{JSON.stringify(responseData)}</samp>
          </div>
        </div>
      )} */}
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
