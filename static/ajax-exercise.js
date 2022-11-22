'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch("/fortune") //this is our whole call to fetch the fortune endpoint in server.py and puts result in the foirst then block
    .then(res => res.text()) //res is the http response from fetch...can call it anything...results data is just a data variable in the "then" block
    .then(data => {
      document.querySelector("#fortune-text").innerHTML=data //this holds elements and now we can manip it...bunch o fmethods from js docs...thisll put it magically into index.html divs


    })
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);
//the button we click is the blue get-fortune button...event is HANDLED for us....already coded...
//this code listens for a click and does whats in function...grabs the buttton, listens for a click and
//oes whats in the function (we have to write )

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(url + "?zipcode=zipcode") //"fetch(url)" is og way, question mark signifies start of QS <--end of address in browser
    .then((res) => res.text())
    .then((weather) => {
      document.querySelector("#weather-info").innerHTML = weather;
      // `Your weather is ${weather.forecast}. The temperature is ${weather.temp}'
    })
}
//^^^`` would set it as a template literal....we can do anything inside the function or do anythin JS method to object

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
