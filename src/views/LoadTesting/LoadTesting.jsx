import React, { useState, useEffect } from "react";
import { withStyles } from "material-ui";
import axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Button } from "components";

//import { Table } from "components";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#19191a",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  file_upload: {
    paddingLeft: "50%",
    marginBottom: "40px",
    position: "relative",
  },
};

function LoadTestingPage() {
  const [csvfile, setCsvFile] = useState("");
  const [repeatation, setRepeatation] = useState(10);
  const [gap, setGap] = useState(1000);
  const [uploadUrl, setUploadUrl] = useState(
    "http://evaaidev.enginecal.com/event/v1/cai/fileupload"
  );
  const map1 = new Map();
  map1.set("passed", 0);
  map1.set("failed", 0);

  const makeHttpReq = async (backendUrl, formData, currentCount) => {
    try {
      const { data } = await axios.post(backendUrl, formData);

      map1.set("passed", map1.get("passed") + 1);
      console.log(data);
      return data;
    } catch (error) {
      const {
        response: { data },
      } = error;
      map1.set("failed", map1.get("failed") + 1);
      console.log(data);

      return data;
    }
  };
  const [responseData, setResponseData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      //const result = makeHttpReq;
    })();
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    const backendUrl = "http://localhost:8000/fileupload";
    let currentCount = 0;

    formData.append("csvfile", csvfile);
    formData.append("repeatation", repeatation);
    formData.append("gap", gap);
    formData.append("uploadUrl", uploadUrl);

    let totalResponse = [];

    const runRepetations = async () => {
      for (let i = 0; i < repeatation; i++) {
        let resp = await makeHttpReq(backendUrl, formData, currentCount);

        await new Promise((r) => setTimeout(r, gap));
        totalResponse.push(resp);
      }
    };

    await runRepetations();
    console.log(totalResponse);
    console.log(totalResponse[0]);
    setResponseData(totalResponse);
  };

  return (
    <div>
      <Button color="danger" fullWidth>
        {" "}
        File Upload API{" "}
      </Button>
      <div>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="file"
            name="csvfile"
            onChange={(e) => {
              setCsvFile(e.target.files[0]);
            }}
          />

          <label htmlFor="uploadUrl">
            <span>upload url</span>:
          </label>
          <input
            type="text"
            name="uploadUrl"
            value={uploadUrl}
            onChange={(e) => {
              e.preventDefault();
              setUploadUrl(e.target.value);
            }}
          />
          <span>&nbsp; &nbsp; &nbsp; </span>

          <label htmlFor="repeatation">
            <span>repeatation &nbsp;</span>{" "}
          </label>
          <input
            type="number"
            value={repeatation}
            onChange={(e) => {
              e.preventDefault();
              setRepeatation(e.target.value);
            }}
            name="repeatation"
          />

          <span>&nbsp; &nbsp; &nbsp; </span>

          <label htmlFor="gap">
            <span>gap &nbsp;</span>
          </label>
          <input
            type="number"
            value={gap}
            onChange={(e) => {
              e.preventDefault();
              setGap(e.target.value);
            }}
            name="gap"
          />
          <br></br>
          <br></br>
          <button
            className="MuiButtonBase-root-84 MuiButton-root-70 RegularButton-button-174 RegularButton-danger-180 RegularButton-fullWidth-175"
            type="submit"
          >
            POST /fileupload
          </button>
        </form>
      </div>
      <div>
        <h3 align="center">Report</h3>
        <TableContainer>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>URL</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Status Code</TableCell>
                <TableCell align="right">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {responseData.map((row) => (
                <TableRow key={row.testDuration}>
                  <TableCell component="th" scope="row">
                    {row.url}
                  </TableCell>
                  <TableCell align="right">{row.testStatus}</TableCell>
                  <TableCell align="right">
                    {row.testDuration || row.date}
                  </TableCell>

                  <TableCell align="right">
                    {row.serverResponse.statusCode}
                  </TableCell>
                  <TableCell align="right">
                    {row.serverResponse.successMessage || row.message}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default withStyles(style)(LoadTestingPage);
