// const b = 6;
// {
//     var a = 7;
//     console.log(b);
// }
// function aFunc(a) {
//     var c = 8;
// }
// console.log(a);

// var meetWithFriend = [],
//     friends = ['Joe', 'Jim', 'Tim'];
// for (let i = 0; i < 3; i++) {
//     meetWithFriend[i] = (myName) =>
//         `Hello, my name is ${myName}, ${friends[i]}`;
// }
// console.log(meetWithFriend);
// console.log(meetWithFriend[0]("Hasan"));
// let v = 5;
// let z = "5";
// //console.log(v + z);
// if (v === z) {
//     console.log("similar")
// } else {
//     console.log("NOT similar")
// }
// let aString = `The value of v is ${v}
// the value of z is ${z}`;
// //console.log(aString)
// let anArray = [1, 5, "hasan", 10, "computer", 20, "book"];
// let aStrArray = anArray.filter(elements => typeof elements === "string")
// //console.log(aStrArray)
// const aNumberArray = [1, 5, 8, 11, 15];
// aNumberArray.push(30);
// //console.log(aNumberArray)
// let aFilteredArray = aNumberArray.filter(el => el > 8);
// //console.log(aFilteredArray)
// let aFilteredNumber = aNumberArray.findIndex(el => el > 30);
// console.log(aFilteredNumber)
// let amapArray = aNumberArray.map(el => el * 2)
// console.log(amapArray)
// aNumberArray.forEach((el, ind) => {
//     let aCons = el * ind;
//     console.log(aCons)
// })
let pageSection = document.querySelectorAll("section");
//console.log(pageSection)
let parentUL = document.querySelector(".navbar")
pageSection.forEach((el, ind) => {
    let sectInfo = el.getAttribute("data-info");
    //console.log(sectInfo)
    let listIt = document.createElement("li");
    listIt.innerHTML = `<a href="#sect${ind+1}">${sectInfo}</a>`;
    parentUL.appendChild(listIt)
})