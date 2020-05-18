'use strict';

var parentElement = document.getElementById('images');
var listParent = document.getElementById('lists');
var allImages = [];
var uniqueIndexArray = [];
var names = [];
var votes = [];
var views = [];
var totalVotes = 0;
var imagesFromLocalJString = [];
// var allVotes = 0;

//constructor function 
function CreateImage(url, alt, title) {
  this.filePath = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allImages.push(this);
}


//appends image to ID in HTML
CreateImage.prototype.render = function () {
  var imageElement = document.createElement('img');
  imageElement.src = this.filePath;
  imageElement.alt = this.alt;
  imageElement.title = this.title;
  parentElement.appendChild(imageElement);
};

new CreateImage('/images/bag.jpg', 'bag', 'bag');
new CreateImage('/images/banana.jpg', 'banana', 'banana');
new CreateImage('/images/bathroom.jpg', 'bathroom', 'bathroom');
new CreateImage('/images/boots.jpg', 'boots', 'boots');
new CreateImage('/images/breakfast.jpg', 'breakfast', 'breakfast');
new CreateImage('/images/bubblegum.jpg', 'bubblegum', 'bubblegum');
new CreateImage('/images/chair.jpg', 'chair', 'chair');
new CreateImage('/images/cthulhu.jpg', 'cthulhu', 'cthulhu');
new CreateImage('/images/dog-duck.jpg', 'dog-duck', 'dog-duck');
new CreateImage('/images/dragon.jpg', 'dragon', 'dragon');
new CreateImage('/images/pen.jpg ', 'pen', 'pen');
new CreateImage('/images/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new CreateImage('/images/scissors.jpg', 'scissors', 'scissors');
new CreateImage('/images/shark.jpg', 'shark', 'shark');
new CreateImage('/images/sweep.png', 'sweep', 'sweep');
new CreateImage('/images/tauntaun.jpg', 'tauntaun', 'tauntaun');
new CreateImage('/images/unicorn.jpg', 'unicorn', 'unicorn');
new CreateImage('/images/usb.gif', 'usb', 'usb');
new CreateImage('/images/water-can.jpg', 'water-can', 'water-can');
new CreateImage('/images/wine-glass.jpg', 'wine-glass', 'wine-glass');


function getRandomIndex() {
  var index = randomNumber(allImages.length);

  while (uniqueIndexArray.includes(index)) {
    index = randomNumber(allImages.length);
  }

  uniqueIndexArray.push(index);

  if (uniqueIndexArray.length > 6) {
    uniqueIndexArray.shift();
  }
  return index;

}

// generates random number
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function displayImage() {
  var index = getRandomIndex();
  allImages[index].render();
  allImages[index].views++;
}

// event listener adding a vote to image clicked
function clickFunction(event) {
  parentElement.textContent = '';

  var titleOfImageClicked = event.target.title;

  for (var i = 0; i < allImages.length; i++) {
    if (titleOfImageClicked === allImages[i].title) {
      allImages[i].votes++;
      totalVotes++;

      if (totalVotes === 25) {
        parentElement.removeEventListener('click', clickFunction);
        makeNamesArray();
        CreateImage.prototype.appendList();
      }
    }
  }
  displayImage();
  displayImage();
  displayImage();
}



displayImage();
displayImage();
displayImage();

// localStorageForImageData();

parentElement.addEventListener('click', clickFunction);

CreateImage.prototype.appendList = function () {
  for (var i = 0; i < allImages.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = `${allImages[i].title} had ${allImages[i].votes} votes and was shown ${allImages[i].views} times.`;
    listParent.appendChild(listElement);
  }
  if (localStorage.getItem('imageLocal') === null) {
    console.log(allImages);
    var stringImages = JSON.stringify(allImages);
    localStorage.setItem('imageLocal', stringImages);
  } else {
    var imagesFromLocal = localStorage.getItem('imageLocal');
    var stringArrayLocall = JSON.parse(imagesFromLocal);
    imagesFromLocalJString = stringArrayLocall;
    addViewsAndVotesLocal();
  }
};

function addViewsAndVotesLocal() {
  for (var i = 0; i < allImages.length; i++) {
    imagesFromLocalJString[i].views += allImages[i].views;
    imagesFromLocalJString[i].votes += allImages[i].votes;
  }
  var updatedCount = JSON.stringify(imagesFromLocalJString);
  localStorage.setItem('imageLocal', updatedCount);
}

// makes names and votes array to display on chart
function makeNamesArray() {
  for (var i = 0; i < allImages.length; i++) {
    names.push(allImages[i].title);
    votes.push(allImages[i].votes);
    views.push(allImages[i].views);
  }
  generateChart();
}

function generateChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }, {
        label: '# of Views',
        data: views,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}