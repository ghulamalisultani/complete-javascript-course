'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// working with AJAX and Asyncronous javaScript
const request = new XMLHttpRequest();
request.open(
  'GET',
  'https://api.countrylayer.com/v2/name/Canada?access_key=6db6f7970ea63cc84f7070bc76b9d76b',
);
request.send();
/* The console.log below doesn't log anything to the console because
    no response is available right after the request is sent
    so we need to wait till the request is fully loaded and response is recieved
*/

const getCountryInfo = function (country) {
  return fetch(
    `https://api.countrylayer.com/v2/name/${country}?access_key=6db6f7970ea63cc84f7070bc76b9d76b`,
  )
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getCountryInfo('Canada');
