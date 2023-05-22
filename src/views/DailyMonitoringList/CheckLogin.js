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

export default function checkLoginData() {
  return handleLogin;
}
