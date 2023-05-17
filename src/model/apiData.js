const bikeIntellData = {
  applicationName: "Bike Intell",
  baseUrl: [
    "http://evaaidev.enginecal.com/",
    "https://evaai.enginecal.com/",
    "http://tvseoldev.enginecal.com/",
    "https://evaeol.tvsmotor.com/",
    "http://tvsrdsdev.enginecal.com/",
    "https://evards.tvsmotor.com/",
    "http://evactr.enginecal.com/",
    "http://tvsctrdev.enginecal.com/",
    "http://tvsrdsdev.enginecal.com/",
    "https://evards.tvsmotor.com/",
  ],
  apis: [
    {
      apiName: "forgot password",
      apiLink: "core/v1/bike-intell/forgetpass",
      requestMethod: "POST",
      requestParams: {
        email: "test@enginecal.com",
        password: "123@Ecal",
      },
    },
    {
      apiName: "check login",
      apiLink: "core/v1/bike-intell/checklogin",
      requestMethod: "POST",
      requestParams: {
        u: "saurabh.singh@enginecal.com",
        p: "12345s6",
      },
      validationParams: {
        userType: "Bluetooth User",
      },
    },
  ],
};

const data = [bikeIntellData];

export default function getApiData() {
  return data;
}
