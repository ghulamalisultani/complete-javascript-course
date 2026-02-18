const touppercase = txt => {
  return txt.toUpperCase();
};

function uppercase(fn) {
  console.log(fn('touppercase'));
}
uppercase(touppercase);

// defferent way
function processData(input, callback) {
  return callback(input);
}

function toUpperCase(str) {
  return str.toUpperCase();
}

// Using the function
console.log(processData('hello world', toUpperCase));
function forEachElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// Using the function
forEachElement([1, 2, 3], (element, index) => {
  console.log(`Element ${index}: ${element * 2}`);
});

// Using callbacks in network request examples
function fetchData(url, callback) {
  setTimeout(() => {
    // Simulate a network request with setTimeout
    const data = `Response from ${url}`;
    callback(data);
  }, 2000); // Simulate a 2-second delay
}

// Using the function
fetchData('https://api.example.com', response => {
  console.log(response); // Output after 2 seconds: "Response from https://api.example.com"
});
