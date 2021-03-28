'use strict';
const names = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissots','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const leftImage = document.getElementById('left-image');
const middleImage =document.getElementById('middle-image');
const rightImage =document.getElementById('right-image');
const imageSection = document.getElementById('image-section');
// console.log(leftImage);

function Product(name){
  this.name=name,
  this.imagePath= `./assets/${name}.jbg`;
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
  const leftIndex = randomNumber(0,Product.all.length-1);
  leftImage.src =Product.all[leftIndex].imagePath;
  leftImage.alt = Product.all[leftIndex].name;
  leftImage.title = Product.all[leftIndex].name;

  const middleIndex = randomNumber(0,Product.all.length-1);
  middleImage.src =Product.all[middleIndex].imagePath;
  middleImage.alt = Product.all[middleIndex].name;
  middleImage.title = Product.all[middleIndex].name;

  const rightIndex = randomNumber(0,Product.all.length-1);
  rightImage.src =Product.all[rightIndex].imagePath;
  rightImage.alt = Product.all[rightIndex].name;
  rightImage.title = Product.all[rightIndex].name;
}
render();
