var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/starboy.jpg') {
      myImage.setAttribute ('src','images/starboysingle.jpg');
    } else {
      myImage.setAttribute ('src','images/starboy.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Fuck off ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Fuck off' + storedName;
}

myButton.onclick = function() {
  setUserName();
}