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
  const [responseData, setResponseData] = useState([]);

  const backendUrl = "http://localhost:8000/v2/test";

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform the login API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/ ",
        apiLink: "core/v1/bike-intell/checklogin ",
        requestMethod: "POST",
        requestParams: {
          u: "saurabh.singh@enginecal.com",
          p: "123456",
        },
        validationParams: {},
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        let resp = [];
        resp["status"] = data.testResult["success"];
        resp["message"] = JSON.stringify(data);
        setResponseData(data);
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
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/forgetpass",
        requestMethod: "POST",
        requestParams: {
          email: "test@enginecal.com",
          password: "123@Ecal",
        },
        validationParams: {
          message: "Password has been updated successfully!!!",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        setResponseData(data);
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
  // Declare variables for new profile
  const [deviceID, setDeviceID] = useState("50000411");
  const [profileName, setProfileName] = useState("Rahul");
  const [profilePassword, setProfilePassword] = useState("1234ec");
  const [profileEmail, setProfileEmail] = useState("somewhere@example.com");
  const [profileMobileNo, setProfileMobileNo] = useState("+91 9876543210");
  const [profileEmergencyNo1, setProfileEmergencyNo1] =
    useState("+91 1234567890");
  const [profileEmergencyNo2, setProfileEmergencyNo2] =
    useState("+91 1234567890");

  const handleNewProfile = (event) => {
    event.preventDefault();

    // Perform the New Profile API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/profile",
        requestMethod: "POST",
        requestParams: {
          user: {
            deviceid: "50000411",
            name: "Rahul",
            password: "1234ec",
            email: "somewhere@example.com",
            mobile: "+91 9876543210",
            emergency_no1: "+91 1234567890",
            emergency_no2: "+91 1234567890",
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        let resp = [];
        resp["status"] = data["success"];
        resp["message"] = JSON.stringify(data);
        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        let resp = [];
        resp["status"] = false;
        resp["message"] = JSON.stringify(error);
        setResponseData(error);
      });
  };

  // Declare variables for new activation code (valcode)
  const [userACode, setUserACode] = useState("Sa1234");
  const [userMac, setUserMac] = useState("56d788cdc641eeA");
  const [userUby, setUserUby] = useState("saurabh.singh@enginecal.com");

  const handleActivationCode = (event) => {
    event.preventDefault();

    // Perform the New Activation code API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/valcode",
        requestMethod: "POST",
        requestParams: {
          acode: "Sa1234",
          mac: "56d788cdc641eeA",
          uby: "saurabh.singh@enginecal.coma",
        },
        validationParams: {
          success: true,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        let resp = [];
        resp["status"] = data["success"];
        resp["message"] = JSON.stringify(data);
        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        let resp = [];
        resp["status"] = false;
        resp["message"] = JSON.stringify(error);
        setResponseData(error);
      });
  };

  // Declare variables for statistics
  const [userDeviceID, setUserDeviceID] = useState("50000406");
  const [type, setType] = useState("drive");
  const [driveNo, setDriveNo] = useState("6");

  const handleStatistics = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/statistics",
        requestMethod: "POST",
        requestParams: {
          devID: "50000406",
          type: "drive",
          driveno: "6",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        let resp = [];
        resp["status"] = data["success"];
        resp["message"] = JSON.stringify(data);
        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        let resp = [];
        resp["status"] = false;
        resp["message"] = JSON.stringify(error);
        setResponseData(error);
      });
  };

  // Declare variables for vehicle model
  const [mfd, setMFD] = useState("Aprilia_IND_B");

  const handleVehicleModel = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/veh_model",
        requestMethod: "POST",
        requestParams: {
          mfd: "Aprilia_IND_B",
        },
        validationParams: {
          success: true,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setResponseData(error);
      });
  };

  // Declare variables for vehicle specification
  const [vehicleMFD, setVehicleMFD] = useState("Hyundai_IND_C");
  const [vehicleModel, setVehicleModel] = useState("Eon");
  const [vehicleFuel, setVehicleFuel] = useState("Diesel");

  const handleVehicleSpecifications = (event) => {
    event.preventDefault();

    // Perform the vehicle specification API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/veh_spec",
        requestMethod: "POST",
        requestParams: {
          mfd: "Hyundai_IND_C",
          model: "Eon",
          fuel: "Diesel",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setResponseData(error);
      });
  };

  // Declare variables for new vehicle profile
  const [newDeviceID, setNewDeviceID] = useState("50000410");
  const [newVehicleRegistration, setNewVehicleRegistration] =
    useState("KA 01 ZZ 99979");
  const [newVehicleFuel, setNewVehicleFuel] = useState("Petrol");
  const [newVehicleManufacturer, setNewVehicleManufacturer] =
    useState("Aprilia_IND_B");
  const [newVehicleModel, setNewVehicleModel] = useState("SR125");
  const [newVehicleVarient, setNewVehicleVarient] = useState("BS6");
  const [mfgYear, setMfgYear] = useState("2015");
  const [engineCapacity, setEngineCapacity] = useState("0.125");
  const [odo, setOdo] = useState("123");

  const handleNewVehicleProfile = (event) => {
    event.preventDefault();

    // Perform the vehicle specification API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/vehicle",
        requestMethod: "POST",
        requestParams: {
          veh_basic: {
            deviceid: "50000410",
            veh_registration: "KA 01 ZZ 99979",
            veh_manufacturer: "Aprilia_IND_B",
            veh_model: "SR125",
            veh_varient: "BS6",
            fuel_type: "Petrol",
            mfg_year: "2015",
            engine_capacity: "0.125",
            odo: "123",
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setResponseData(error);
      });
  };

  // Declare variables for getting calibration values
  const [devID, setDevID] = useState("50000410");

  const handleCalibrationValues = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/getcalvalues",
        requestMethod: "POST",
        requestParams: {
          devID: "50000410",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setResponseData(error);
      });
  };

  // Declare variables for monitor flags
  const [devIDFlag, setDevIDFlag] = useState("50000410");

  const handleMonitorFlag = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/monitor_flag",
        requestMethod: "POST",
        requestParams: {
          devID: "50000410",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setResponseData(error);
      });
  };

  // Declare variables for Logout
  const [user, setUser] = useState("saurabh.singh@enginecal.com");

  const handleLogout = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        baseUrl: "https://evaai.enginecal.com/",
        apiLink: "core/v1/bike-intell/logout",
        requestMethod: "POST",
        requestParams: {
          u: "saurabh.singh@enginecal.com",
        },
        validationParams: {
          errorMessage: "Invalid Operation user was already logged out!",
          success: "false",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);

        setResponseData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setResponseData(error);
      });
  };
  // Handling all the API's function in one function
  function runAll(event) {
    console.log("Running all the API's at same time..");
    console.log("Check login : " + handleLogin(event));
    handleLogin(event);
    handleForgetPassword(event);
    handleNewProfile(event);
    handleActivationCode(event);
    handleStatistics(event);
    handleVehicleModel(event);
    handleVehicleSpecifications(event);
    handleNewVehicleProfile(event);
    handleCalibrationValues(event);
    handleMonitorFlag(event);
    handleLogout(event);
  }

  const handleApi = (event) => {
    event.preventDefault();
    switch (currentApi) {
      case "core/v1/bike-intell/checklogin":
        handleLogin(event);
        break;
      case "core/v1/bike-intell/forgetpass":
        handleForgetPassword(event);
        break;
      case "core/v1/bike-intell/profile":
        handleNewProfile(event);
        break;
      case "core/v1/bike-intell/valcode":
        handleActivationCode(event);
        break;
      case "core/v1/bike-intell/statistics":
        handleStatistics(event);
        break;
      case "core/v1/bike-intell/veh_model":
        handleVehicleModel(event);
        break;
      case "core/v1/bike-intell/veh_spec":
        handleVehicleSpecifications(event);
        break;
      case "core/v1/bike-intell/vehicle":
        handleNewVehicleProfile(event);
        break;
      case "core/v1/bike-intell/getcalvalues":
        handleCalibrationValues(event);
        break;
      case "core/v1/bike-intell/monitor_flag":
        handleMonitorFlag(event);
        break;
      case "core/v1/bike-intell/logout":
        handleLogout(event);
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
                      {/* Implementation of new profile registration */}
                      {selectedOption === apiData[0].apis[2].apiLink && (
                        <form onSubmit={handleNewProfile}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Device ID:</label>
                              <input
                                id="deviceid"
                                type="text"
                                name="deviceid"
                                value={deviceID}
                                onChange={(e) => {
                                  setDeviceID(e.target.value);
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
                              <label htmlFor="inputField">Name:</label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                value={profileName}
                                onChange={(e) => {
                                  setProfileName(e.target.value);
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
                              <label htmlFor="inputField">Email:</label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                value={profileEmail}
                                onChange={(e) => {
                                  setProfileEmail(e.target.value);
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
                              <label htmlFor="inputField">Set Password:</label>
                              <input
                                id="password"
                                type="password"
                                name="password"
                                value={profilePassword}
                                onChange={(e) => {
                                  setProfilePassword(e.target.value);
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
                              <label htmlFor="inputField">Mobile Number:</label>
                              <input
                                id="mobileno"
                                type="text"
                                name="mobile"
                                value={profileMobileNo}
                                onChange={(e) => {
                                  setProfileMobileNo(e.target.value);
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
                              <label htmlFor="inputField">
                                Emergency Number 1:
                              </label>
                              <input
                                id="eno1"
                                type="text"
                                name="emergency_no1"
                                value={profileEmergencyNo1}
                                onChange={(e) => {
                                  setProfileEmergencyNo1(e.target.value);
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
                              <label htmlFor="inputField">
                                Emergency Number 2:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={profileEmergencyNo2}
                                onChange={(e) => {
                                  setProfileEmergencyNo2(e.target.value);
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
                      {/* Implementation of new activation code */}
                      {selectedOption === apiData[0].apis[3].apiLink && (
                        <form onSubmit={handleActivationCode}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">
                                Activation Code:
                              </label>
                              <input
                                id="acode"
                                type="text"
                                name="acode"
                                value={userACode}
                                onChange={(e) => {
                                  setUserACode(e.target.value);
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
                              <label htmlFor="inputField">Mac:</label>
                              <input
                                id="mac"
                                type="text"
                                name="mac"
                                value={userMac}
                                onChange={(e) => {
                                  setUserMac(e.target.value);
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
                              <label htmlFor="inputField">Uby:</label>
                              <input
                                id="uby"
                                type="text"
                                name="uby"
                                value={userUby}
                                onChange={(e) => {
                                  setUserUby(e.target.value);
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
                      {/* Implementation of statistics */}
                      {selectedOption === apiData[0].apis[4].apiLink && (
                        <form onSubmit={handleStatistics}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Device ID:</label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={userDeviceID}
                                onChange={(e) => {
                                  setUserDeviceID(e.target.value);
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
                              <label htmlFor="inputField">Type:</label>
                              <input
                                id="type"
                                type="text"
                                name="type"
                                value={type}
                                onChange={(e) => {
                                  setType(e.target.value);
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
                              <label htmlFor="inputField">Drive No:</label>
                              <input
                                id="driveno"
                                type="text"
                                name="driveno"
                                value={driveNo}
                                onChange={(e) => {
                                  setDriveNo(e.target.value);
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
                      {/* Implementation of vehicle model */}
                      {selectedOption === apiData[0].apis[5].apiLink && (
                        <form onSubmit={handleVehicleModel}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">MFD:</label>
                              <input
                                id="mfd"
                                type="text"
                                name="mfd"
                                value={mfd}
                                onChange={(e) => {
                                  setMFD(e.target.value);
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
                      {/* Implementation of vehicle specification */}
                      {selectedOption === apiData[0].apis[6].apiLink && (
                        <form onSubmit={handleVehicleSpecifications}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">MFD:</label>
                              <input
                                id="mfd"
                                type="text"
                                name="mfd"
                                value={vehicleMFD}
                                onChange={(e) => {
                                  setVehicleMFD(e.target.value);
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
                              <label htmlFor="inputField">Model:</label>
                              <input
                                id="model"
                                type="text"
                                name="model"
                                value={vehicleModel}
                                onChange={(e) => {
                                  setVehicleModel(e.target.value);
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
                              <label htmlFor="inputField">Fuel:</label>
                              <input
                                id="fuel"
                                type="text"
                                name="fuel"
                                value={vehicleFuel}
                                onChange={(e) => {
                                  setVehicleFuel(e.target.value);
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
                      {/* Implementation of new vehicle profile registration */}
                      {selectedOption === apiData[0].apis[7].apiLink && (
                        <form onSubmit={handleNewVehicleProfile}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Device ID:</label>
                              <input
                                id="deviceid"
                                type="text"
                                name="deviceid"
                                value={newDeviceID}
                                onChange={(e) => {
                                  setNewDeviceID(e.target.value);
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
                              <label htmlFor="inputField">
                                Registration No:
                              </label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                value={newVehicleRegistration}
                                onChange={(e) => {
                                  setNewVehicleRegistration(e.target.value);
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
                              <label htmlFor="inputField">Fuel:</label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                value={newVehicleFuel}
                                onChange={(e) => {
                                  setNewVehicleFuel(e.target.value);
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
                              <label htmlFor="inputField">Manufacturer:</label>
                              <input
                                id="mfg"
                                type="text"
                                name="mfg"
                                value={newVehicleManufacturer}
                                onChange={(e) => {
                                  setNewVehicleManufacturer(e.target.value);
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
                              <label htmlFor="inputField">Vehicle Model:</label>
                              <input
                                id="mobileno"
                                type="text"
                                name="mobile"
                                value={newVehicleModel}
                                onChange={(e) => {
                                  setNewVehicleModel(e.target.value);
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
                              <label htmlFor="inputField">
                                Vehicle Varient:
                              </label>
                              <input
                                id="eno1"
                                type="text"
                                name="emergency_no1"
                                value={newVehicleVarient}
                                onChange={(e) => {
                                  setNewVehicleVarient(e.target.value);
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
                              <label htmlFor="inputField">
                                Manufacturing Year:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={mfgYear}
                                onChange={(e) => {
                                  setMfgYear(e.target.value);
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
                              <label htmlFor="inputField">
                                EngineCapacity:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={engineCapacity}
                                onChange={(e) => {
                                  setEngineCapacity(e.target.value);
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
                              <label htmlFor="inputField">ODO:</label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={odo}
                                onChange={(e) => {
                                  setOdo(e.target.value);
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
                      {/* Implementation of calibration values */}
                      {selectedOption === apiData[0].apis[8].apiLink && (
                        <form onSubmit={handleCalibrationValues}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Device ID:</label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={devID}
                                onChange={(e) => {
                                  setDevID(e.target.value);
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
                      {/* Implementation of monitor flags */}
                      {selectedOption === apiData[0].apis[9].apiLink && (
                        <form onSubmit={handleMonitorFlag}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">Device ID:</label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={devIDFlag}
                                onChange={(e) => {
                                  setDevIDFlag(e.target.value);
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
                      {/* Implementation of Logout */}
                      {selectedOption === apiData[0].apis[10].apiLink && (
                        <form onSubmit={handleLogout}>
                          {isInputVisible && (
                            <div>
                              <label htmlFor="inputField">User:</label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={user}
                                onChange={(e) => {
                                  setUser(e.target.value);
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
                    {responseData.testResult === undefined
                      ? "Waiting for data"
                      : responseData.testResult.success === true
                      ? "Success"
                      : "Failed"}
                  </div>,
                  <div style={{ alignContent: "center" }}>
                    {responseData.testResult === undefined
                      ? "Waiting for data"
                      : responseData.testResult.message ||
                        "Missing message field in test result"}
                  </div>,
                ],
              ]}
            />
          }
        />
      </ItemGrid>

      <div>
        <button onClick={runAll}>testing</button>

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
