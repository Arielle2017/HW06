
function getWeather(lat, lon){
const location = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cef02c615e447123fdc7bf049f7807a8`;

    let request = new XMLHttpRequest()
    request.open("GET", location, true);
    request.onload = onloadFunc;
    request.onerror = onerrorFunc;
    request.send();
  }

function onloadFunc(lat, lon){
  const location = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cef02c615e447123fdc7bf049f7807a8`;
  const response = JSON.parse(this.response);
  console.log(response);
  let ul = document.createElement("ul");
  ul.id = "listContainer";
  document.getElementById("container").appendChild(ul);

  var li = document.createElement("li");
  //if results, print most specific results as li inside ul
  const container = document.getElementById("container");
    li.innerHTML =  "The humidity of the chosen city is " + response.main.humidity +"; pressure is " +response.main.pressure + "; temperature is " +response.main.temp
    document.getElementById("listContainer").appendChild(li);
    }

function onerrorFunc(){
  //print error message as li inside ul
var li = document.createElement("li");
li.innerHTML = "Sorry, an error occurred";
document.getElementById("listContainer").appendChild(li);
}


//built-in function, calling success function and error function below:
function myWeather(){
  navigator.geolocation.getCurrentPosition(success, error);
}

  function success(position){
  console.log("Current position is captured!", position);
  //adding "position" to show more details in log
  //adding in lat and lng below (from console after a successful return, under position, find coords, and find the two)
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  getWeather(lat, lon);
}

  function error(){
  console.log("It didn't work...")
}
