import { Grid } from "material-ui";

import {
  RegularCard,
  Table as CardTable,
  ItemGrid,
  ProcessResult,
} from "components";

import React, { useState } from "react";
// import axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import getApiData from "../../model/apiData";

const apiData = getApiData();

const apiLinks = [
  "core/v1/bike-intell/checklogin",
  "event/v1/bike-intell/fileupload",
  "event",
  "core",
];

function DailyMonitoringList() {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
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
                        {apiLinks.map((apiLink) => {
                          return <option>{apiLink}</option>;
                        })}
                      </select>

                      <button onClick={toggleInputVisibility}>Input</button>
                      {isInputVisible && (
                        <div>
                          <label htmlFor="inputField">Email:</label>
                          <input
                            type="text"
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
                            type="text"
                            style={{
                              display: "block",
                              marginTop: "10px",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>,
                  <button
                    onClick={(event) => console.log("Run test button clicked")}
                  >
                    Run test
                  </button>,
                  "Pass",

                  "Test passed",
                ],
                [
                  "http://evaaidev.enginecal.com/#/dashboard",
                  <button
                    onClick={(event) => console.log("Run test button clicked")}
                  >
                    Run test
                  </button>,
                  "Pass",

                  "Server is Up",
                ],
              ]}
            />
          }
        />
      </ItemGrid>
      <div>
        <h3 align="center">Report</h3>
        <TableContainer>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Application</TableCell>
                <TableCell align="center">API Name</TableCell>
                <TableCell align="center">URL</TableCell>
                <TableCell align="right">Method</TableCell>
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
