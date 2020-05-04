// Personal API Key for OpenWeatherMap API
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&units=metric&APPID=12ee0ca97cb978e30433467567425292";

// fetch(baseURL + 33101 + apiKey)
//   .then(result => result.json())
//   .then(data => console.log(data));

let d = new Date();
let m = d.getMonth() + 1;
let newDate = m + '.' + d.getDate() + '.' + d.getFullYear();

const getData = async url => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const postData = async (url, mydata) => {
  const myresult = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mydata)
  });
  const thedata = await myresult.json();
  return thedata;
};

const upDateUI = adata => {
  console.log("UI console", adata);
  document.getElementById("date").textContent = adata.date;
  document.getElementById("content").textContent = adata.feel;
  document.getElementById("temp").textContent = adata.temp + "C Celcius";
};

document.getElementById("generate").addEventListener("click", async () => {
  let feel = document.getElementById("feelings").value || "Good";
  let zipVal = document.getElementById("zip").value
  const getDataFromAPI = await getData(baseURL + zipVal + apiKey);
  console.log(getDataFromAPI.main.temp);
  const postBackFromServer = await postData("http://localhost:3000/addPost", {
    feeling: feel,
    temperature: getDataFromAPI.main.temp,
    zip:zipVal,
    date: newDate
  });
  console.log(postBackFromServer);
  const getBackFromServer = await getData("/addGet");
  console.log(getBackFromServer);
  upDateUI(getBackFromServer);
});