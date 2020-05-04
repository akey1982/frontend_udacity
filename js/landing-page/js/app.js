/**
Global Variables
 * 
 * 
*/
let pageSection = document.querySelectorAll(".sections");
let uList = document.querySelector("ul");
let length = pageSection.length;
/**
 * @description  creates a navbar based on a section and add eventlistener to list elemenst
 */

function createNavbar() {
  pageSection.forEach((el, ind) => {
    let liEle = document.createElement("li");
    liEle.classList.add("menu__link");
    liEle.innerHTML = `<a id="sec${ind}" href="#section${ind +
      1}">Section ${ind + 1}</a>`;
    uList.appendChild(liEle);
  });

  let liElements = document.querySelectorAll("li");

  liElements.forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      let target = e.target.getAttribute("href");
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
}

/**
 * @description takes a array and find a index
 * @param {array} array
 * @returns {index}  index of a potential section
 */
function sectionIndex(array) {
  let index = array.findIndex(el => el > 0);
  return index;
}

/**
 * @description gets the window hight
 * @returns a
 */
function getWindowsize() {
  let size = window.innerWidth;

  return size;
}

/**
 *  @description to delay the section transition on mobile devices
 * @returns{bool}
 */
function screenModus() {
  if (getWindowsize() < 800) {
    return true;
  } else {
    return false;
  }
}

/**
* @description focusing a selection

*/

function sectionSelector() {
  posArray = [];

  pageSection.forEach(el => {
    if (screenModus()) {
      posArray.push(el.getBoundingClientRect().top + 500);
    } else {
      posArray.push(el.getBoundingClientRect().top);
    }
  });

  let firstElement = sectionIndex(posArray);

  if (firstElement !== -1) {
    document.getElementById("sec" + firstElement).classList.add("highlight");
    pageSection[firstElement].classList.add("highlight");

    if (firstElement < length - 1) {
      document
        .getElementById("sec" + firstElement)
        .classList.remove("highlight");
    } else if (firstElement > 0) {
      document
        .getElementById("sec" + firstElement)
        .classList.remove("highlight");
      pageSection[firstElement].classList.remove("highlight");
    }

    for (let j = 0; j < length; j++) {
      if (firstElement === j) {
        document.getElementById("sec" + j).classList.add("highlight");
        pageSection[j].classList.add("highlight");
      } else {
        document.getElementById("sec" + j).classList.remove("highlight");
        pageSection[j].classList.remove("highlight");
      }
    }
  }
}

/*call methods and register event listener*/
document.addEventListener("DOMContentLoaded", createNavbar);
document.addEventListener("scroll", sectionSelector);



















//Changes 14.8.19

var dateArray = [];


pm.environment.set("dateArray", dateArray)


var Req = request.data;
var NodeID = postman.getEnvironmentVariable("NodeID");

if(responseCode.code === 200){
    
 tests["Status code is 200 "+ "from Node ID: "+ NodeID] = true;   
    
}else{
    
tests["Status code is not 200 from Node ID: "+ NodeID + "actual response code: "+ responseCode.code ] = false;
    
}


var answer = JSON.parse(responseBody);
var dateString = answer[0].timeStamp
dateNow = new Date();
datestate = new Date(answer[0].timeStamp);

var endresult = convertMS(dateCalc(datestate,dateNow));
console.log(endresult +"end");


function dateCalc(date1, date2){
    
    var diff = Math.abs(date1 - date2);
    return diff
}


if (convertMS(dateCalc(datestate,dateNow)) < 24){
    
    
    createDatearray();
    
   postman.setNextRequest("NXG_seAssetvalue_OptHour")
    
    
}


function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return h;
}





function createDatearray(){
    
    theDate = new Date();
    
    for(var i = 0; i < 25; i++){
        
        
    theDate.setHours(theDate.getHours() + 1)

   dateArray[i] = theDate.toISOString();
        
    }
    
}
    
    


