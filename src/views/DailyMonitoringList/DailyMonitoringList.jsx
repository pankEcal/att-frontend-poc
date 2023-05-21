import { Grid } from "material-ui";

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

  const [loginData, setLoginData] = useState([]);

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
        setLoginData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
        setLoginData(error);
      });

    // Reset the input fields
    setUsername("");
    setPassword("");
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
                        onChange={(e) => {
                          console.log("value: ", e.target.value);
                          console.log("changing api's");
                        }}
                        style={{
                          marginRight: "10px",
                        }}
                      >
                        {apiData[0].apis.map((api) => {
                          return <option>{api.apiLink}</option>;
                        })}
                      </select>

                      <button
                        onClick={toggleInputVisibility}
                        style={{
                          marginTop: "10px",
                        }}
                      >
                        Input
                      </button>
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
                        <button
                          type="submit"
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>,
                  <button
                    onClick={handleLogin}
                    style={{
                      // marginTop: "10px",
                      // marginBottom: "120px",
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
                  loginData.success
                    ? JSON.stringify(loginData.success)
                    : "watiting for data",
                  <div style={{ alignContent: "center" }}>
                    {loginData.success || loginData.errorMessage
                      ? JSON.stringify(loginData)
                      : "waiting for data"}
                  </div>,
                ],
              ]}
            />
          }
        />
      </ItemGrid>

      {loginData && (
        <div className="loginData">
          <h3>Test Result</h3>
          <div>
            <samp>{JSON.stringify(loginData)}</samp>
          </div>
        </div>
      )}
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
