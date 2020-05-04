// Gloabls
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&units=metric&APPID=4ca334c3656b1532466d21b57c2eb3e4";
let d = new Date();
let m = d.getMonth() + 1;
let newDate = m + "." + d.getDate() + "." + d.getFullYear();



/**
 * @description get data from server
 * @param {url} url 
 * @returns {data} data from server
 */
const getData = async url => {
  const result = await fetch(url);
  const data = await result.json();
  return data;
};


/**
 * @description get data from server
 * @param {url} url
 * @param {data} data object
 */
const postData = async (url, data) => {
  const serverRes = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});
  const response = await serverRes.json();
  return response;
};

const upDateUI = data => {
  document.getElementById("date").textContent = data.date;
  document.getElementById("content").textContent = data.feel;
  document.getElementById("temp").textContent = data.temp + " Celcius";
};

document.getElementById("generate").addEventListener("click", async () => {
  let feel = document.getElementById("feelings").value || "Good";
  let zipVal = document.getElementById("zip").value || "63450";
  const getDataFromAPI = await getData(baseURL + zipVal + apiKey);
  await postData("http://localhost:3000/addPost", {
    feeling: feel,
    temperature: getDataFromAPI.main.temp,
    zip: zipVal,
    date: newDate
  });

  getData("http://localhost:3000/addGet").then(serverData => {
    upDateUI(serverData);
  });
});
