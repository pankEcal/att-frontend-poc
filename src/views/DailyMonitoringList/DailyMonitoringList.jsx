import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/dailymonitor/apis";

function processResult(result) {
  let dataArray = result.body["data"];

  dataArray.forEach((value) => {
    console.log(value);
  });
}
const message = () => {
  // const [message, setMessage] = useState("");
  // const [updated, setUpdated] = useState(message);
  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // };
  // const handleClick = () => {
  //   // 👇 "message" stores input field value
  //   setUpdated(message);
  // };
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       id="message"
  //       name="message"
  //       onChange={handleChange}
  //       value={message}
  //     />
  //     <h2>Message: {message}</h2>
  //     <h2>Updated: {updated}</h2>
  //     <button onClick={handleClick}>Update</button>
  //   </div>
  // );
};
const baseUrl = "https://evaai.enginecal.com/";
const apiLinks = [
  "core/v1/bike-intell/checklogin",
  "event/v1/bike-intell/fileupload",
  "event",
  "core",
];

function DailyMonitoringList() {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle="SYSTEM"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["API", "Tests", "Status", "Message"]}
              tableData={[
                [
                  <select
                    onChange={(e) => {
                      console.log("value: ", e.target.value);
                    }}
                  >
                    Select base urls:
                    {apiLinks.map((apiLink) => (
                      <option>{apiLink}</option>
                    ))}
                  </select>,
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
                [
                  "http://evaaidev.enginecal.com/event",
                  <button
                    onClick={(event) => console.log("Run test button clicked")}
                  >
                    Run test
                  </button>,
                  "Pass",

                  "Server is Up",
                ],
                [
                  <button onClick={message}>
                    {" "}
                    http://evaaidev.enginecal.com/event{" "}
                  </button>,

                  <button
                    onClick={(event) => console.log("Run test button clicked")}
                  >
                    Run test
                  </button>,
                  "Pass",
                  "test passed",
                ],
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default DailyMonitoringList;
