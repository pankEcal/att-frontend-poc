import React, { useState } from "react";
import { withStyles } from "material-ui";
import axios from "axios";

import { Button } from "components";

import { Table } from "components";

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
      console.log(currentCount + 1, data);
      map1.set("passed", map1.get("passed") + 1);
    } catch (error) {
      console.log(error.message);
      map1.set("failed", map1.get("failed") + 1);
      // console.log(error.response.data.message);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    const backendUrl = "http://localhost:8000/fileupload";
    let currentCount = 0;

    formData.append("csvfile", csvfile);
    formData.append("repeatation", repeatation);
    formData.append("gap", gap);
    formData.append("uploadUrl", uploadUrl);

    const executeBatchRequests = setInterval(() => {
      if (currentCount >= repeatation) {
        clearInterval(executeBatchRequests);
        console.log(map1);
        console.log("batch file upload completed!");
      } else {
        makeHttpReq(backendUrl, formData, currentCount);
        currentCount++;
      }
    }, gap);
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
            // class="MuiButtonBase-root-84 MuiButton-root-70 RegularButton-button-174 RegularButton-danger-180 RegularButton-fullWidth-175"
            class="MuiButtonBase-root-84 MuiButton-root-70 RegularButton-button-174 RegularButton-danger-180 RegularButton-fullWidth-175"
            type="submit"
          >
            POST /fileupload
          </button>
        </form>
      </div>
      <div>
        <h3 align="center">Report</h3>
        <Table
          tableHeaderColor="primary"
          tableHead={["S.No", "Timestamp", "Status Code", "Progress Status"]}
          tableData={[
            ["1", "325356355", "Pass", 200],
            ["2", "242435345", "Pass", 200],
            ["3", "232436463", "Pass", 200],
            ["4", "674563454", "Pass", 200],
          ]}
        />
      </div>
    </div>
  );
}
const LoadTestingPages = () => {
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
      console.log(currentCount + 1, data);
      map1.set("passed", map1.get("passed") + 1);
    } catch (error) {
      console.log(error.message);
      map1.set("failed", map1.get("failed") + 1);
      // console.log(error.response.data.message);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    const backendUrl = "http://localhost:8000/fileupload";
    let currentCount = 0;

    formData.append("csvfile", csvfile);
    formData.append("repeatation", repeatation);
    formData.append("gap", gap);
    formData.append("uploadUrl", uploadUrl);

    const executeBatchRequests = setInterval(() => {
      if (currentCount >= repeatation) {
        clearInterval(executeBatchRequests);
        console.log(map1);
        console.log("batch file upload completed!");
      } else {
        makeHttpReq(backendUrl, formData, currentCount);
        currentCount++;
      }
    }, gap);
  };

  return (
    <div>
      <h2>File Upload </h2>
      <div>
        <hr />
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

          <label htmlFor="uploadUrl">upload url</label>
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

          <label htmlFor="repeatation">repeatation &nbsp; </label>
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

          <label htmlFor="gap">gap &nbsp;</label>
          <input
            type="number"
            value={gap}
            onChange={(e) => {
              e.preventDefault();
              setGap(e.target.value);
            }}
            name="gap"
          />

          <br />
          <button type="submit">POST /fileupload</button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(style)(LoadTestingPage);
