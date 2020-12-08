var numItems = 0;
var price = 0;
window.onload = function()
{

document.getElementById('b2').onclick = function()
{
  numItems = numItems + 1;
  price = price + 2;
  console.log(numItems)
  console.log(price)
  document.getElementById('totalItems').innerHTML = numItems;
  document.getElementById('cost').innerHTML = price;
}

document.getElementById('b4').onclick = function()
{
  numItems = numItems + 1;
  price = price + 2.5;
  console.log(numItems)
  console.log(price)
  document.getElementById('totalItems').innerHTML = numItems;
  document.getElementById('cost').innerHTML = price;
}

document.getElementById('b6').onclick = function()
{
  numItems = numItems + 1;
  price = price + 3.5;
  console.log(numItems)
  console.log(price)
  document.getElementById('totalItems').innerHTML = numItems;
  document.getElementById('cost').innerHTML = price;
}

document.getElementById('b8').onclick = function()
{
  numItems = numItems + 1;
  price = price + 3.5;
  console.log(numItems)
  console.log(price)
  document.getElementById('totalItems').innerHTML = numItems;
  document.getElementById('cost').innerHTML = price;
}

document.getElementById('b10').onclick = function()
{
  numItems = numItems + 1;
  price = price + .75;
  console.log(numItems)
  console.log(price)
  document.getElementById('totalItems').innerHTML = numItems;
  document.getElementById('cost').innerHTML = price;
}

document.getElementById('b11').onclick = function()
{
  numItems = 0;
  price = 0;
  document.getElementById('totalItems').innerHTML = numItems;
  document.getElementById('cost').innerHTML = price;
}
}
