import { Card, Grid, Button } from "material-ui";

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
import getBatchData from "../../model/batchData";

const apiData = getApiData();
const bikeIntellData = getBatchData();

// console.log(apiData[0].apis[0].apiLink);

const backendUrl = "http://localhost:8000/v2/test";

function DailyMonitoringList() {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  // handle POST request for "core/v1/bike-intell/checklogin"
  const [username, setUsername] = useState("saurabh.singh@enginecal.com");
  const [password, setPassword] = useState("123456");
  const [currentApi, setCurrentApi] = useState(
    "core/v1/bike-intell/checklogin"
  );
  const [responseData, setResponseData] = useState([]);
  const [checkLoginPayloadData, setPayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/ ",
    apiLink: "core/v1/bike-intell/checklogin ",
    requestMethod: "POST",
    requestParams: {
      u: username,
      p: password,
    },
    validationParams: {},
  });

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform the login API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkLoginPayloadData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        // console.log(data);
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

  // handle POST request for "core/v1/bike-intell/forgetpass"
  const [forgetEmail, setForgetEmail] = useState("test@enginecal.com");
  const [forgetPassword, setForgetPassword] = useState("123@Ecal");
  const [forgetPasswordPayloadData, setForgetPasswordPayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/forgetpass",
    requestMethod: "POST",
    requestParams: {
      email: forgetEmail,
      password: forgetPassword,
    },
    validationParams: {
      message: "Password has been updated successfully!!!",
    },
  });

  const handleForgetPassword = (event) => {
    event.preventDefault();

    // Perform the forgot API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forgetPasswordPayloadData),
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

  // handle POST request for "core/v1/bike-intell/profile"
  const [deviceID, setDeviceID] = useState("50000411");
  const [profileName, setProfileName] = useState("Rahul");
  const [profilePassword, setProfilePassword] = useState("1234ec");
  const [profileEmail, setProfileEmail] = useState("somewhere@example.com");
  const [profileMobileNo, setProfileMobileNo] = useState("+91 9876543210");
  const [profileEmergencyNo1, setProfileEmergencyNo1] =
    useState("+91 1234567890");
  const [profileEmergencyNo2, setProfileEmergencyNo2] =
    useState("+91 1234567890");

  const [profilePayloadData, setProfilePayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/profile",
    requestMethod: "POST",
    requestParams: {
      user: {
        deviceID: "50000411",
        profileName: "Rahul",
        profilePassword: "1234ec",
        profileEmail: "somewhere@example.com",
        profileMobileNo: "+91 9876543210",
        profileEmergencyNo1: "+91 1234567890",
        profileEmergencyNo2: "+91 1234567890",
      },
    },
  });

  const handleNewProfile = (event) => {
    event.preventDefault();

    // Perform the New Profile API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profilePayloadData),
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
  //core/v1-bike/intell/valcode
  const [userACode, setUserACode] = useState("Sa1234");
  const [userMac, setUserMac] = useState("56d788cdc641eeA");
  const [userUby, setUserUby] = useState("saurabh.singh@enginecal.com");
  const [valcodePayLoadData, setValcodePayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/valcode",
    requestMethod: "POST",
    requestParams: {
      userACode: "Sa1234",
      userMac: "56d788cdc641eeA",
      userUby: "saurabh.singh@enginecal.coma",
    },
    validationParams: {
      success: true,
    },
  });

  const handleActivationCode = (event) => {
    event.preventDefault();

    // Perform the New Activation code API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valcodePayLoadData),
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

  // Declare variables for "core/v1/bike-intell/statistics"

  const [userDeviceID, setUserDeviceID] = useState("D8073293314"); // 50000406
  const [type, setType] = useState("drive");
  const [driveNo, setDriveNo] = useState("6");
  const [statisticsPayloadData, setStatisticsPayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/statistics",
    requestMethod: "POST",
    requestParams: {
      userDeviceID: "D8073293314", //50000406
      type: "Bluetooth",
      driveNo: "6",
    },
  });

  const handleStatistics = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statisticsPayloadData),
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

  // Declare variables for vehicle model "core/v1/bike-intell/veh_model"
  const [mfd, setMFD] = useState("Aprilia_IND_B");
  const [vehicleModelPayloadData, setVehicleModelPayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/veh_model",
    requestMethod: "POST",
    requestParams: {
      mfd: "Aprilia_IND_B",
    },
    validationParams: {
      success: true,
    },
  });

  const handleVehicleModel = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicleModelPayloadData),
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

  // Declare variables for vehicle specification  "core/v1/bike-intell/veh_spec"
  const [vehicleMFD, setVehicleMFD] = useState("Hyundai_IND_C");
  const [vehicleModel, setVehicleModel] = useState("Eon");
  const [vehicleFuel, setVehicleFuel] = useState("Diesel");
  const [vehicleSpecificationPayloadData, setVehicleSpecificationPayloadData] =
    useState({
      baseUrl: "https://evaai.enginecal.com/",
      apiLink: "core/v1/bike-intell/veh_spec",
      requestMethod: "POST",
      requestParams: {
        vehicleMFD: "Hyundai_IND_C",
        vehicleModel: "Eon",
        vehicleFuel: "Diesel",
      },
    });

  const handleVehicleSpecifications = (event) => {
    event.preventDefault();

    // Perform the vehicle specification API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehicleSpecificationPayloadData),
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

  // Declare variables for new vehicle profile "core/v1/bike-intell/vehicle"
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

  const [vehiclePayloadData, setVehiclePayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/vehicle",
    requestMethod: "POST",
    requestParams: {
      veh_basic: {
        newDeviceID: "50000410",
        newVehicleRegistration: "KA 01 ZZ 99979",
        newVehicleManufacturer: "Aprilia_IND_B",
        newVehicleModel: "SR125",
        newVehicleVarient: "BS6",
        newVehicleFuel: "Petrol",
        mfgYear: "2015",
        engineCapacity: "0.125",
        odo: "123",
      },
    },
  });

  const handleNewVehicleProfile = (event) => {
    event.preventDefault();

    // Perform the vehicle specification API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehiclePayloadData),
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

  // Declare variables for getting calibration values "core/v1/bike-intell/getcalvalues"
  const [devID, setDevID] = useState("50000410");

  const [getCalValuePayloadData, setGetCalValuePayloadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/getcalvalues",
    requestMethod: "POST",
    requestParams: {
      devID: "50000410",
    },
  });

  const handleCalibrationValues = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getCalValuePayloadData),
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

  const [monitorFlagPayLoadData, setMonitorFlagPayLoadData] = useState({
    baseUrl: "https://evaai.enginecal.com/",
    apiLink: "core/v1/bike-intell/monitor_flag",
    requestMethod: "POST",
    requestParams: {
      devID: "50000411",
    },
  });

  const handleMonitorFlag = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(monitorFlagPayLoadData),
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

  const [logoutPayloadData, setLogoutPayloadData] = useState({
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
  });

  const handleLogout = (event) => {
    event.preventDefault();

    // Perform the statistics API request using fetch or Axios
    fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logoutPayloadData),
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

  const [allApiData, setAllApiData] = useState([]);

  // console.log(
  //   allApiData.testData && allApiData.testData.map((e) => e.serverResponse)
  // );

  console.log(allApiData.testData);
  for (let index in allApiData.testData) {
    console.log(allApiData.testData[index].testResult.url);
    console.log(allApiData.testData[index].testResult.status);
    console.log(allApiData.testData[index].testResult.message);
  }

  // Handling all the API's function in one function
  const runAll = (event) => {
    event.preventDefault();
    console.log("Running all the API's at same time..");

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
  };

  // const batchUrl = "https://att-backend.onrender.com/v2/test/batch";
  const batchUrl = "http://localhost:8000/v2/test/batch";

  const handleBatchTest = (event) => {
    event.preventDefault();

    // Perform the batch API request using fetch or Axios
    fetch(batchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bikeIntellData),
    })
      .then((responseData) => responseData.json())
      .then((bikeIntellData) => {
        // Handle the response from the server

        console.log(bikeIntellData);

        setAllApiData(bikeIntellData);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);

        setAllApiData(error);
      });
  };

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
          cardTitle="System"
          content={
            <CardTable
              tableHeaderColor="primary"
              tableHead={[
                "API",
                "Tests",
                "Status",
                "Test Result",
                "Duration",
                "Server Response",
              ]}
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Email:
                              </label>
                              <input
                                id="username"
                                type="text"
                                name="u"
                                value={username}
                                onChange={(e) => {
                                  setUsername(e.target.value);

                                  // updating the payload data
                                  let currentState = {
                                    ...checkLoginPayloadData,
                                  };
                                  currentState.requestParams.u = e.target.value;
                                  setPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Password:
                              </label>
                              <input
                                id="password"
                                type="password"
                                name="p"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                  let currentState = {
                                    ...checkLoginPayloadData,
                                  };
                                  currentState.requestParams.p = e.target.value;
                                  setPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Email:
                              </label>
                              <input
                                id="forgetEmail"
                                type="text"
                                name="email"
                                value={forgetEmail}
                                onChange={(e) => {
                                  setForgetEmail(e.target.value);

                                  // updating the payload data
                                  let currentState = {
                                    ...forgetPasswordPayloadData,
                                  };
                                  currentState.requestParams.email =
                                    e.target.value;

                                  setForgetPasswordPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Password:
                              </label>
                              <input
                                id="forgetPassword"
                                type="password"
                                name="password"
                                value={forgetPassword}
                                onChange={(e) => {
                                  setForgetPassword(e.target.value);

                                  // updating the payload data
                                  let currentState = {
                                    ...forgetPasswordPayloadData,
                                  };
                                  currentState.requestParams.password =
                                    e.target.value;

                                  setForgetPasswordPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Device ID:
                              </label>
                              <input
                                id="deviceid"
                                type="text"
                                name="deviceid"
                                value={deviceID}
                                onChange={(e) => {
                                  setDeviceID(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.deviceID =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Name:
                              </label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                value={profileName}
                                onChange={(e) => {
                                  setProfileName(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.profileName =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Email:
                              </label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                value={profileEmail}
                                onChange={(e) => {
                                  setProfileEmail(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.profileEmail =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}

                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Set Password:
                              </label>
                              <input
                                id="password"
                                type="password"
                                name="password"
                                value={profilePassword}
                                onChange={(e) => {
                                  setProfilePassword(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.profilePassword =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Mobile Number:
                              </label>
                              <input
                                id="mobileno"
                                type="text"
                                name="mobile"
                                value={profileMobileNo}
                                onChange={(e) => {
                                  setProfileMobileNo(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.profileMobileNo =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Emergency Number 1:
                              </label>
                              <input
                                id="eno1"
                                type="text"
                                name="emergency_no1"
                                value={profileEmergencyNo1}
                                onChange={(e) => {
                                  setProfileEmergencyNo1(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.profileEmergencyNo1 =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Emergency Number 2:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={profileEmergencyNo2}
                                onChange={(e) => {
                                  setProfileEmergencyNo2(e.target.value);
                                  let currentState = {
                                    ...profilePayloadData,
                                  };
                                  currentState.requestParams.profileEmergencyNo2 =
                                    e.target.value;

                                  setProfilePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Activation Code:
                              </label>
                              <input
                                id="acode"
                                type="text"
                                name="acode"
                                value={userACode}
                                onChange={(e) => {
                                  setUserACode(e.target.value);
                                  //update the valcode data
                                  let currentState = {
                                    ...valcodePayLoadData,
                                  };
                                  currentState.requestParams.userACode =
                                    e.target.value;

                                  setValcodePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Mac:
                              </label>
                              <input
                                id="mac"
                                type="text"
                                name="mac"
                                value={userMac}
                                onChange={(e) => {
                                  setUserMac(e.target.value);

                                  let currentState = {
                                    ...valcodePayLoadData,
                                  };
                                  currentState.requestParams.userMac =
                                    e.target.value;

                                  setValcodePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Uby:
                              </label>
                              <input
                                id="uby"
                                type="text"
                                name="uby"
                                value={userUby}
                                onChange={(e) => {
                                  setUserUby(e.target.value);
                                  let currentState = {
                                    ...valcodePayLoadData,
                                  };
                                  currentState.requestParams.userUby =
                                    e.target.value;

                                  setValcodePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Device ID:
                              </label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={userDeviceID}
                                onChange={(e) => {
                                  setUserDeviceID(e.target.value);
                                  //update the statistics data
                                  let currentState = {
                                    ...statisticsPayloadData,
                                  };
                                  currentState.requestParams.userDeviceID =
                                    e.target.value;

                                  setStatisticsPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Type:
                              </label>
                              <input
                                id="type"
                                type="text"
                                name="type"
                                value={type}
                                onChange={(e) => {
                                  setType(e.target.value);
                                  let currentState = {
                                    ...statisticsPayloadData,
                                  };
                                  currentState.requestParams.type =
                                    e.target.value;

                                  setStatisticsPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Drive No:
                              </label>
                              <input
                                id="driveno"
                                type="text"
                                name="driveno"
                                value={driveNo}
                                onChange={(e) => {
                                  setDriveNo(e.target.value);
                                  let currentState = {
                                    ...statisticsPayloadData,
                                  };
                                  currentState.requestParams.driveNo =
                                    e.target.value;

                                  setStatisticsPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                MFD:
                              </label>
                              <input
                                id="mfd"
                                type="text"
                                name="mfd"
                                value={mfd}
                                onChange={(e) => {
                                  setMFD(e.target.value);
                                  //update the vehicle  model data
                                  let currentState = {
                                    ...vehicleModelPayloadData,
                                  };
                                  currentState.requestParams.mfd =
                                    e.target.value;

                                  setVehicleModelPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                MFD:
                              </label>
                              <input
                                id="mfd"
                                type="text"
                                name="mfd"
                                value={vehicleMFD}
                                onChange={(e) => {
                                  setVehicleMFD(e.target.value);
                                  //update the vehicle specification data
                                  let currentState = {
                                    ...vehicleSpecificationPayloadData,
                                  };
                                  currentState.requestParams.vehicleMFD =
                                    e.target.value;

                                  setVehicleSpecificationPayloadData(
                                    currentState
                                  );
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Model:
                              </label>
                              <input
                                id="model"
                                type="text"
                                name="model"
                                value={vehicleModel}
                                onChange={(e) => {
                                  setVehicleModel(e.target.value);
                                  let currentState = {
                                    ...vehicleSpecificationPayloadData,
                                  };
                                  currentState.requestParams.vehicleModel =
                                    e.target.value;

                                  setVehicleSpecificationPayloadData(
                                    currentState
                                  );
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Fuel:
                              </label>
                              <input
                                id="fuel"
                                type="text"
                                name="fuel"
                                value={vehicleFuel}
                                onChange={(e) => {
                                  setVehicleFuel(e.target.value);
                                  let currentState = {
                                    ...vehicleSpecificationPayloadData,
                                  };
                                  currentState.requestParams.vehicleFuel =
                                    e.target.value;

                                  setVehicleSpecificationPayloadData(
                                    currentState
                                  );
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Device ID:
                              </label>
                              <input
                                id="deviceid"
                                type="text"
                                name="deviceid"
                                value={newDeviceID}
                                onChange={(e) => {
                                  setNewDeviceID(e.target.value);
                                  //update vehicle data
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.newDeviceID =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Registration No:
                              </label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                value={newVehicleRegistration}
                                onChange={(e) => {
                                  setNewVehicleRegistration(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.newVehicleRegistration =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Fuel:
                              </label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                value={newVehicleFuel}
                                onChange={(e) => {
                                  setNewVehicleFuel(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.newVehicleFuel =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}

                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Manufacturer:
                              </label>
                              <input
                                id="mfg"
                                type="text"
                                name="mfg"
                                value={newVehicleManufacturer}
                                onChange={(e) => {
                                  setNewVehicleManufacturer(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.newVehicleManufacturer =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Vehicle Model:
                              </label>
                              <input
                                id="mobileno"
                                type="text"
                                name="mobile"
                                value={newVehicleModel}
                                onChange={(e) => {
                                  setNewVehicleModel(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.newVehicleModel =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Vehicle Varient:
                              </label>
                              <input
                                id="eno1"
                                type="text"
                                name="emergency_no1"
                                value={newVehicleVarient}
                                onChange={(e) => {
                                  setNewVehicleVarient(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.newVehicleVarient =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Manufacturing Year:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={mfgYear}
                                onChange={(e) => {
                                  setMfgYear(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.mfgYear =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                EngineCapacity:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={engineCapacity}
                                onChange={(e) => {
                                  setEngineCapacity(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.engineCapacity =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
                                }}
                              />
                            </div>
                          )}
                          {isInputVisible && (
                            <div>
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                ODO:
                              </label>
                              <input
                                id="eno2"
                                type="text"
                                name="emergency_no2"
                                value={odo}
                                onChange={(e) => {
                                  setOdo(e.target.value);
                                  setEngineCapacity(e.target.value);
                                  let currentState = {
                                    ...vehiclePayloadData,
                                  };
                                  currentState.requestParams.odo =
                                    e.target.value;

                                  setVehiclePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Device ID:
                              </label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={devID}
                                onChange={(e) => {
                                  setDevID(e.target.value);
                                  //update for calValue data
                                  let currentState = {
                                    ...getCalValuePayloadData,
                                  };
                                  currentState.requestParams.devID =
                                    e.target.value;

                                  setGetCalValuePayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                Device ID:
                              </label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={devIDFlag}
                                onChange={(e) => {
                                  setDevIDFlag(e.target.value);
                                  //update for monitor flag data
                                  let currentState = {
                                    ...monitorFlagPayLoadData,
                                  };
                                  currentState.requestParams.devID =
                                    e.target.value;

                                  setMonitorFlagPayLoadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                              <label
                                style={{
                                  marginTop: "10px",
                                  display: "inline-block",
                                  fontWeight: "700",
                                  color: "black",
                                }}
                                htmlFor="inputField"
                              >
                                User:
                              </label>
                              <input
                                id="devid"
                                type="text"
                                name="devid"
                                value={user}
                                onChange={(e) => {
                                  setUser(e.target.value);
                                  //updating lolgout data
                                  let currentState = {
                                    ...logoutPayloadData,
                                  };
                                  currentState.requestParams.u = e.target.value;

                                  setLogoutPayloadData(currentState);
                                }}
                                style={{
                                  display: "block",
                                  marginTop: "1px",
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
                          fontWeight: "900",
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
                      verticalAlign: "top",
                    }}
                  >
                    Run test
                  </button>,
                  <td>
                    <div>
                      {responseData.testResult === undefined
                        ? "Waiting for data"
                        : responseData.testResult.success === true
                        ? "Success"
                        : "Failed"}
                    </div>
                  </td>,

                  <td>
                    <div>
                      {responseData.testResult === undefined
                        ? "Waiting for data"
                        : String(responseData.testResult.testDuration)}
                    </div>
                  </td>,

                  <div style={{ alignContent: "center" }}>
                    {responseData.testResult === undefined
                      ? "Waiting for data"
                      : responseData.testResult.testDuration}
                  </div>,

                  <div
                    style={{
                      alignContent: "center",
                      maxWidth: "400px",
                      overflowWrap: "break-word",
                      verticalAlign: "top",
                    }}
                  >
                    {responseData.testResult === undefined
                      ? "Waiting for data"
                      : JSON.stringify(responseData.serverResponse)}
                  </div>,
                ],
              ]}
            />
          }
        />
      </ItemGrid>

      <div>
        {/* <button onClick={handleBatchTest}>testing</button> */}
        <Button
          style={{
            color: "white",
            backgroundColor: "#ff0000",
            // backgroundColor: "#ff0000",
            color: "white",
            marginLeft: "15px",
            // marginLeft: "1080px",
            marginBottom: "20px",
          }}
          // onClick={onClickHandler}
          onClick={handleBatchTest}
        >
          Run All API
        </Button>

        <TableContainer>
          <Table
            aria-label="simple table"
            stickyHeader
            style={{ width: "1215px" }}
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>URL</TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Status
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Test Duration
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  API Name
                </TableCell>
                {/* <TableCell style={{ fontWeight: "bold" }} align="center">
                  Test Result
                </TableCell> */}
                <TableCell style={{ fontWeight: "bold" }} align="center">
                  Server Response
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allApiData.testData &&
                allApiData.testData.map((res) => (
                  <TableRow>
                    <TableCell
                      style={{ verticalAlign: "top" }}
                      component="th"
                      scope="row"
                    >
                      {res.testResult.url}
                    </TableCell>
                    <TableCell style={{ verticalAlign: "top" }} align="center">
                      {res.testResult.status}
                    </TableCell>
                    <TableCell style={{ verticalAlign: "top" }} align="center">
                      {res.testResult.testDuration}
                    </TableCell>
                    <TableCell style={{ verticalAlign: "top" }} align="center">
                      {res.testResult.apiName}
                    </TableCell>
                    {/* <TableCell style={{ verticalAlign: "top" }} align="center">
                      {JSON.stringify(res.testResult)}
                    </TableCell> */}
                    <TableCell
                      align="left"
                      style={{
                        maxWidth: "400px",
                        overflowWrap: "break-word",
                        verticalAlign: "top",
                      }}
                    >
                      {JSON.stringify(res.serverResponse)}
                    </TableCell>{" "}
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
