'use strict';

var parent = document.getElementById('images');
var listParent = document.getElementById('lists');
var count = 0;
var rounds = 25;
var allImages = [];

function CreateImage(url, alt, title) {
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allImages.push(this);
}

CreateImage.prototype.appendImage = function () {
  // create img element
  var imageElement = document.createElement('img');

  // fill the src with the path to the image
  imageElement.setAttribute('src', this.filePath);
  // fill in alt 
  imageElement.setAttribute('alt', this.alt);
  // fill in title
  imageElement.setAttribute('title', this.title);
  // appendChild to parent element
  parent.appendChild(imageElement);
};

CreateImage.prototype.appendList = function () {
  for (var i = 0; i < allImages.length; i++) {
    var listElement = document.createElement('li');

    listElement.textContent = `${allImages[i].title} had ${allImages[i].votes} votes and was shown ${allImages[i].views} times.`;

    listParent.appendChild(listElement);
  }
};


function randomNumber(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomImage() {

  if (count === rounds) {
    parent.removeEventListener('click', getRandomImage);
    CreateImage.prototype.appendList();
    return;
  }

  count++;
  parent.textContent = '';

  var randomIndex = randomNumber(0, allImages.length - 1);
  var secondRandomIndex = randomNumber(0, allImages.length - 1);
  var thirdRandomIndex = randomNumber(0, allImages.length - 1);
  // while loop prevents images from repeating


  while (randomIndex === secondRandomIndex || secondRandomIndex === thirdRandomIndex || thirdRandomIndex === randomIndex) {
    secondRandomIndex = randomNumber(0, allImages.length - 1);
    thirdRandomIndex = randomNumber(0, allImages.length - 1);
  }
  allImages[randomIndex].appendImage();
  allImages[randomIndex].views++;
  allImages[secondRandomIndex].appendImage();
  allImages[secondRandomIndex].views++;
  allImages[thirdRandomIndex].appendImage();
  allImages[thirdRandomIndex].views++;
}

// event listener adding a vote to image clicked
parent.addEventListener('click', function () {
  var titleOfImageClicked = event.target.title;

  for (var i = 0; i < allImages.length; i++) {
    if (titleOfImageClicked === allImages[i].title) {
      allImages[i].votes++;
    }
  }
});







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



getRandomImage();