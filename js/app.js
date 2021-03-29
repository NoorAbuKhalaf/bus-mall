'use strict';
const names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','shark','tauntaun','unicorn','water-can','wine-glass'];
let leftIndex;
let middleIndex;
let rightIndex;
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const leftImage = document.getElementById('left-image');
const middleImage =document.getElementById('middle-image');
const rightImage =document.getElementById('right-image');
const imageSection = document.getElementById('images-section');
// console.log(leftImage);

function Product(name){
  this.name=name,
  this.imagePath= `assets/${this.name}.jpg`;
  this.votes=0;
  this.views=0;
  Product.all.push(this);
}
Product.all=[];

for (let i=0; i<names.length; i++) {
  new Product(names[i]);
}
// console.table(Product.all);

function render(){
  leftIndex = randomNumber(0,Product.all.length-1);
  leftImage.src =Product.all[leftIndex].imagePath;
  leftImage.alt = Product.all[leftIndex].name;
  leftImage.title = Product.all[leftIndex].name;

  middleIndex = randomNumber(0,Product.all.length-1);
  middleImage.src =Product.all[middleIndex].imagePath;
  middleImage.alt = Product.all[middleIndex].name;
  middleImage.title = Product.all[middleIndex].name;

  rightIndex = randomNumber(0,Product.all.length-1);
  rightImage.src =Product.all[rightIndex].imagePath;
  rightImage.alt = Product.all[rightIndex].name;
  rightImage.title = Product.all[rightIndex].name;
}
render();

imageSection.addEventListener('click',mouseClick);
function mouseClick (event){
  // console.log(event.targrt.id);
  if(event.target.id !== 'images-section'){
    if(event.target.id === rightImage.id){
      Product.all[rightIndex].votes++;
    }
    else if (event.target.id === middleImage.id){
      Product.all[middleIndex].votes++;
    }
    else{
      Product.all[leftIndex].votes++;
    }
  }
  // console.table(Product.all);
  render();
}

