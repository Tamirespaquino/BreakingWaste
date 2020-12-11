'use strict';

var cart = JSON.parse(localStorage.getItem('cart')) || [];
var cartDOM = document.querySelector('.cart');
var addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

if (cart.length > 0) {
  cart.forEach(function (product) {
    insertItemToDOM(product);
    countCartTotal();
    addToCartButtonsDOM.forEach(function (addToCartButtonDOM) {
      var productDOM = addToCartButtonDOM.parentNode;

      if (productDOM.querySelector('.product__name').innerText === product.name) {
        handleActionButtons(addToCartButtonDOM, product);
      }
    });
  });
}

addToCartButtonsDOM.forEach(function (addToCartButtonDOM) {
  addToCartButtonDOM.addEventListener('click', function () {
    var productDOM = addToCartButtonDOM.parentNode;
    var product = {
      image: productDOM.querySelector('.product__image').getAttribute('src'),
      name: productDOM.querySelector('.product__name').innerText,
      price: productDOM.querySelector('.product__price').innerText,
      quantity: 1
    };
    var isInCart = cart.filter(function (cartItem) {
      return cartItem.name === product.name;
    }).length > 0;

    if (!isInCart) {
      insertItemToDOM(product);
      cart.push(product);
      saveCart();
      handleActionButtons(addToCartButtonDOM, product);
    }
  });
}); //Function to insert item to DOM
//MUDAR AQUI PRA FICAR UMA LISTA

function insertItemToDOM(product) {
  cartDOM.insertAdjacentHTML('beforeend', "\n    <div class=\"cart__item\">\n      <img class=\"cart__item__image\" src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" >\n      <h3 class=\"cart__item__name\">").concat(product.name, "</h3>\n      <h3 class=\"cart__item__price\">").concat(product.price, "</h3>\n      <button class=\"btn btn-primary btn-small").concat(product.quantity === 1 ? ' btn-danger' : '', "\" data-action=\"DECREASE_ITEM\">&minus;</button>\n      <h3 class=\"cart__item__quantity\">").concat(product.quantity, "</h3>\n      <button class=\"btn btn-primary btn-small\" data-action=\"INCREASE_ITEM\">&plus;</button>\n      <button class=\"btn btn-danger btn-small\" data-action=\"REMOVE_ITEM\">&times;</button>\n    </div>\n  "));
  addCartFooter();
} //Function to Handle Buttons in the cart


function handleActionButtons(addToCartButtonDOM, product) {
  addToCartButtonDOM.innerText = 'In Cart';
  addToCartButtonDOM.disabled = true;
  var cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
  cartItemsDOM.forEach(function (cartItemDOM) {
    if (cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
      cartItemDOM.querySelector('[data-action = "INCREASE_ITEM"]').addEventListener('click', function () {
        return increaseItem(product, cartItemDOM);
      });
      cartItemDOM.querySelector('[data-action = "DRECREASE_ITEM"]').addEventListener('click', function () {
        return decreaseItem(product, cartItemDOM, addToCartButtonDOM);
      });
      cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', function () {
        return removeItem(product, cartItem, addToCartButtonDOM);
      });
    }
  });
} //Function to increase item in cart


function increaseItem(product, cartItemDOM) {
  cart.forEach(function (cartItem) {
    if (cartItem.name === product.name) {
      cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
      cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn-danger');
      saveCart();
    }
  });
} //Function to decrease item in cart


function decreaseItem(product, cartItemDOM, addToCartButtonsDOM) {
  cart.forEach(function (cartItem) {
    if (cartItem.name === product.name) {
      if (cartItem.quantity > 1) {
        cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
        saveCart();
      } else {
        removeItem(product, cartItemDOM, addToCartButtonDOM);
      }

      if (cartItem.quantity === 1) {
        cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn-danger');
      }
    }
  });
} //Function to remove item from cart


function removeItem(product, cartItemDOM, addToCartButtonDOM) {
  cartItemDOM.classList.add('cart__item--removed');
  setTimeout(function () {
    return cartItemDOM.remove();
  }, 250);
  cart = cart.filter(function (cartItem) {
    return cartItem.name !== product.name;
  });
  saveCart();
  addToCartButtonDOM.innerText = 'Add To Cart';
  addToCartButtonDOM.disabled = false;

  if (cart.length < 1) {
    document.querySelector('.cart-footer').remove();
  }
} //Function to add cart footer


function addCartFooter() {
  if (document.querySelector('.cart-footer') === null) {
    cartDOM.insertAdjacentHTML('afterend', "\n        <div class=\"cart-footer\">\n            <button class=\"btn btn-danger\" data-action=\"CLEAR_CART\">Clear Cart</button>\n            <button class=\"btn btn-primary\" data-action=\"CHECKOUT\">Pay</button>\n        </div>\n        ");
    document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', function () {
      return clearCart();
    });
    document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', function () {
      return checkout();
    });
  }
}

function clearCart() {
  document.querySelectorAll('.cart__item').forEach(function (cartItemDOM) {
    cartItemDOM.classList.add('cart__item--removed');
    setTimeout(function () {
      return cartItemDOM.remove();
    }, 250);
  });
  cart = [];
  localStorage.removeItem('cart');
  countCartTotal();
  document.querySelector('.cart-footer').remove();
  addToCartButtonsDOM.forEach(function (addToCartButtonDOM) {
    addToCartButtonDOM.innerText = 'Add To Cart';
    addToCartButtonDOM.disabled = false;
  });
}

function checkout() {
  var paypalFormHTML = "\n    <form id=\"paypal-form\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">\n        <input type=\"hidden\" name=\"cmd\" value=\"_cart\">\n        <input type=\"hidden\" name=\"upload\" value=\"1\">\n        <input type=\"hidden\" name=\"business\" value=\"sachin-321@gmail.com\">\n    ";
  cart.forEach(function (cartItem, index) {
    ++index;
    paypalFormHTML += "\n            <input type=\"hidden\" name=\"item_name_".concat(index, "\" value=\"").concat(cartItem.name, "\">\n            <input type=\"hidden\" name=\"amount_").concat(index, "\" value=\"").concat(cartItem.price, "\">\n            <input type=\"hidden\" name=\"quantity_").concat(index, "\" value=\"").concat(cartItem.quantity, "\">\n            ");
  });
  paypalFormHTML += "\n        <input type=\"submit\" value=\"PayPal\">\n    </form>\n    <div class =\"overlay\"></div>\n    ";
  document.querySelector('body').insertAdjacentHTML('beforeend', paypalFormHTML);
  document.getElementById('paypal-form').submit();
} //Function to calculate total amount


function countCartTotal() {
  var cartTotal = 0;
  cart.forEach(function (cartItem) {
    return cartTotal += cartItem.quantity * cartItem.price;
  });
  document.querySelector('[data-action="CHECKOUT"]').innerText = "Pay $".concat(cartTotal);
} //Function to sabe cart on changes


function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  countCartTotal();
} //api do google 


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
} // function do botão da home


function myfunction() {
  var forms = document.getElementById("formulario");
  var box = document.getElementById("adicionar");
  var eForms = document.getElementById("enviarForms");
  forms.innerHTML = "<h4>Obrigado por utilizar a BreakingWaste</h3>";
  alert("Formulário Enviado com sucesso!");
}