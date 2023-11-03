var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://ay2027.github.io/week4/cities1.json');

ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();