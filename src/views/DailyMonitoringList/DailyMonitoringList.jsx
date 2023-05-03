import { Grid, Button } from "material-ui";

import { RegularCard, Table, ItemGrid } from "components";

import React from "react";

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
                  "http://evaaidev.enginecal.com/#/pages/login",
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
                  "http://evaaidev.enginecal.com/core",
                  // <CustomButton children="Run Test"/> ,
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
