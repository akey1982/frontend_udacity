// Personal API Key for OpenWeatherMap API
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "12ee0ca97cb978e30433467567425292";

// Create a new date instance dynamically with JS
let d = new Date();
let month = d.getMonth() + 1;
let newDate = month + "." + d.getDate() + "." + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);

/* Function called by event listener */
function performAction(e) {
    const zip = document.getElementById("zip").value;
    getZip(baseURL, zip, apiKey)
        .then(result => {
            console.log(result);
            const input = document.getElementById("feelings").value;
            postData("/addData", {
                temp: result.main.temp,
                date: newDate,
                resp: input
            });
        })
        .then(data => {
            updateUI();
        });
}


/* Function to GET Web API Data */
const getZip = async (baseURL, zip, key) => {
    const response = await fetch(baseURL + `${zip}&units=metric&APPID=` + key);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
    console.log(data);

    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

/* Function that retrieves data from server to update UI elements */
const updateUI = async () => {
    const request = await fetch("/all");
    try {
        const allData = await request.json();
        console.log(allData);
        // console.log("updating UI");
        document.getElementById("temp").innerHTML =
            "Temperature: " + allData.temp + " °C";
        document.getElementById("date").innerHTML = "Date: " + allData.date;
        document.getElementById("content").innerHTML = "Content: " + allData.resp;
    } catch (error) {
        console.log("error", error);
    }
};