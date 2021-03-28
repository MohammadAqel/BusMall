'use strict'

let leftIndex;
let centerIndex;
let rightIndex;
let votesNum = 0;
let totalVotes = 25;

const leftImage = document.getElementById('leftImage');
const centerImage = document.getElementById('centerImage');
const rightImage = document.getElementById('rightImage');
const imageSection = document.getElementById('imageSection');

const images = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass',
];

function product(name){
  this.name = name;
  this.path = `./assets/${name}.jpg`;
  this.votes = 0;
  this.views = 0,
  product.all.push(this);
}

product.all = [];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < images.length ; i++){
  new product(images[i]);
}

function rendur(){
  leftIndex = randomNumber(0,images.length-1);
  centerIndex = randomNumber(0,images.length-1);
  rightIndex = randomNumber(0,images.length-1);

  if (leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex) {
    rendur();
  }

  else 
  {
  leftImage.src = product.all[leftIndex].path;
  leftImage.alt = product.all[leftIndex].name;
  leftImage.title = product.all[leftIndex].name;

  centerImage.src = product.all[centerIndex].path;
  centerImage.alt = product.all[centerIndex].name;
  centerImage.title = product.all[centerIndex].name;

  rightImage.src = product.all[rightIndex].path;
  rightImage.alt = product.all[rightIndex].name;
  rightImage.title = product.all[rightIndex].name;
  }
}

imageSection.addEventListener('click',voteClick ,veiwClick);

function voteClick(event){
  if(votesNum < totalVotes){
    if(event.target.id !== 'imageSection'){
      if(event.target.id === leftImage.id){
        product.all[leftIndex].votes++;
      }else if(event.target.id === centerImage.id){
        product.all[centerIndex].votes++;
      }else{
        product.all[rightIndex].votes++;
      }
    }votesNum++;
    rendur();
  }
}



function veiwClick(event){
  if(event.target.id !== 'imageSection'){
    if(event.target.id === leftImage.id){
      product.all[leftIndex].views++;
    }else if(event.target.id === centerImage.id){
      product.all[centerIndex].views++;
    }else{
      product.all[rightIndex].views++;
    }
  }rendur();
  
}

rendur();

const result = document.getElementById('result');
const productList = document.getElementById('productList');

result.addEventListener('click', displayProductList);

function displayProductList(event){

  const h3El = document.createElement('h3');
  productList.appendChild(h3El);
  h3El.textContent = 'Product List';

  const ulEl = document.createElement('ul');
  productList.appendChild(ulEl);

  for (let i = 0; i < images.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${product.all[i].name} had ${product.all[i].votes} votes, and was seen ${product.all[i].views} times.`;
  }

}

rendur();