'use strict';

var parent = document.getElementById('images');

var allImages = [];

function CreateImage(url, alt, title) {
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allImages.push(this);
}


new CreateImage('../images/bag.jpg', 'bag', 'bag');
new CreateImage('../images/banana.jpg', 'banana', 'banana');
new CreateImage('../images/bathroom.jpg', 'bathroom', 'bathroom');
new CreateImage('../images/boots.jpg', 'boots', 'boots');
new CreateImage('../images/breakfast.jpg', 'breakfast', 'breakfast');
new CreateImage('../images/bubblegum.jpg', 'bubblegum', 'bubblegum');
new CreateImage('../images/chair.jpg', 'chair', 'chair');
new CreateImage('../images/cthulhu.jpg', 'cthulhu', 'cthulhu');
new CreateImage('../images/dog-duck.jpg', 'dog-duck', 'dog-duck');
new CreateImage('../images/dragon.jpg', 'dragon', 'dragon');
new CreateImage('../images/pen.jpg ', 'pen', 'pen');
new CreateImage('../images/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new CreateImage('../images/scissors.jpg', 'scissors', 'scissors');
new CreateImage('../images/shark.jpg', 'shark', 'shark');
new CreateImage('../images/sweep.png', 'sweep', 'sweep');
new CreateImage('../images/tauntaun.jpg', 'tauntaun', 'tauntaun');
new CreateImage('../images/unicorn.jpg', 'unicorn', 'unicorn');
new CreateImage('../images/usb.gif', 'usb', 'usb');
new CreateImage('../images/water-can.jpg', 'water-can', 'water-can');
new CreateImage('../images/wine-glass.jpg', 'wine-glass', 'wine-glass');

function randomNumber(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
