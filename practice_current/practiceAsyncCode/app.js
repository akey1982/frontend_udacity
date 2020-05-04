const fetch = require("node-fetch");



const fakeData = async url => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  };



 fakeData('/getFake')