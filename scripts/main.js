var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/oludeniz.jpg') {
      myImage.setAttribute ('src','images/oludeniz2.jpg');
    } else {
      myImage.setAttribute ('src','images/oludeniz.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Тя как зовут хоть?');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Привет, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Привет, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
