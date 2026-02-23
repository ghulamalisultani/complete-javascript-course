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
// getCountryInfo('Canada');

// Welcome to my coding challange
/*
In this challange, I am gonna write a program that will find out
where I am. I am tasked to used my device's GPS to coordinate my location
and use the coordinate to find the country.
Let's go 😉
*/
// function whereAmI() {
//   navigator.geolocation.getCurrentPosition(position => {
//     fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
//     )
//       .then(response => {
//         if (response.ok) {
//           throw new Error('Something went wrong!!!');
//         }
//         response.json();
//       })
//       .then(data => console.log(data.countryName))
//       .catch(err => console.error(err.message));
//   });
// }
// whereAmI();
//Wow! I did it 🏆🎉💪

// let's go for the next CHALLANGE

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
let img;
const createImage = function (path) {
  const images = document.querySelector('.images');
  return new Promise((res, rej) => {
    img = document.createElement('img');
    img.src = path;
    img.onload = () => {
      images.append(img);
      res(img);
    };
    img.onerror = () => {
      rej(new Error('Image not found!'));
    };
  });
};

createImage('img/img-1.jpg')
  .then(res => {
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(function () {
    img.style.display = 'none';
    return wait(2);
  })
  .then(function () {
    return createImage('img/img-2.jpg');
  })
  .then(function () {
    return wait(2);
  })
  .then(function () {
    img.style.display = 'none';
  })
  .then(img => console.log('image 2 loaded'))
  .catch(err => console.error(err.message));
//wow! I did it 😉

//using async await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryCode}`,
    );

    // BUG in video:
    // if (!resGeo.ok) throw new Error('Problem getting country');

    // FIX:
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
