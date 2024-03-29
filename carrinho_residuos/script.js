'use strict';

let cart = JSON.parse(localStorage.getItem('cart')) || [];


const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');


if (cart.length > 0) {
    cart.forEach(product => {
        insertItemToDOM(product);
        countCartTotal();

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if(productDOM.querySelector('.product__name').innerText === product.name) {
                handleActionButtons(addToCartButtonDOM, product);
            }
        });
        
    });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            //image: productDOM.querySelector('.product__image').getAttribute('src'),
            name: productDOM.querySelector('.product__name').innerText,
            price: productDOM.querySelector('.product__price').innerText,
            quantity: 1
        };

        const isInCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;

        if (!isInCart) {
            insertItemToDOM(product);

            cart.push(product);
            saveCart();
            handleActionButtons(addToCartButtonDOM, product);
        }

    });
});

//Function to insert item to DOM

//MUDAR AQUI PRA FICAR UMA LISTA
function insertItemToDOM(product) {
    cartDOM.insertAdjacentHTML(
        'beforeend',
        `
    <div class="cart__item">
        <div class="cart__item__image" alt="${product.name}">
            <label class="cart__item__name">${product.name}</label>
            <select class="cart__item__price">${product.price}</select>
        </div>
        <div>
        <label class="cart__item__name">${product.name}</label>
        <input type="text" class="form-control product__price" id="inputCEP">
      </div>
    </div>
              
      <button class="btn btn-primary btn-small${product.quantity === 1 ? ' btn-danger' : ''}" data-action="DECREASE_ITEM">&minus;</button>
      <h3 class="cart__item__quantity">${product.quantity}</h3>
      <button class="btn btn-primary btn-small" data-action="INCREASE_ITEM">&plus;</button>
      <button class="btn btn-danger btn-small" data-action="REMOVE_ITEM">&times;</button>
    </div>
  `
        
    );

    addCartFooter();
}

//Function to Handle Buttons in the cart

function handleActionButtons(addToCartButtonDOM, product){
    addToCartButtonDOM.innerText = 'Adicionado';
    addToCartButtonDOM.disabled = true;

    const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
    cartItemsDOM.forEach(cartItemDOM => {
        if(cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
         //   cartItemDOM.querySelector('[data-action = "INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
         //   cartItemDOM
         //               .querySelector('[data-action = "DRECREASE_ITEM"]')
         //               .addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
            cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItem, addToCartButtonDOM));
            
        }
    });

console.log(handleActionButtons);


//Function to increase item in cart/adicionado
function increaseItem(product, cartItemDOM) {
    cart.forEach(cartItem => {
        if(cartItem.name === product.name) {
            cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn-danger');
            saveCart();
        }
    });
}

//Function to decrease item in cart/adicionado
function decreaseItem(product, cartItemDOM, addToCartButtonsDOM) {
    cart.forEach(cartItem => {
        if(cartItem.name === product.name) {
            if(cartItem.quantity > 1) {
                cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
                saveCart();
            } else{
                removeItem(product, cartItemDOM, addToCartButtonDOM);
            }
            if(cartItem.quantity === 1) {
                cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn-danger');
            }
        }
    });
}

//Function to remove item from cart
function removeItem(product, cartItemDOM, addToCartButtonDOM) {
    cartItemDOM.classList.add('cart__item--removed');
    setTimeout(() => cartItemDOM.remove(), 250);
    cart = cart.filter(cartItem => cartItem.name !== product.name);
    saveCart();
    addToCartButtonDOM.innerText = 'Adicionar formulário';
    addToCartButtonDOM.disabled = false;

    if (cart.length < 1) {
        document.querySelector('.cart-footer').remove();
    }
}
console.log(removeItem);

//Function to add cart footer
function addCartFooter() {
    if(document.querySelector('.cart-footer') === null) {
        cartDOM.insertAdjacentHTML(
            'afterend',
            `
        <div class="cart-footer">
            <button class="btn btn-danger" data-action="CLEAR_CART">Descartar</button>
            <button class="btn btn-primary" data-action="CHECKOUT">Valor total</button>
        </div>
        `
        );

        document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
        document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => checkout());
    }
}

function clearCart() {
    document.querySelectorAll('.cart__item').forEach(cartItemDOM => {
        cartItemDOM.classList.add('cart__item--removed');
        setTimeout(() => cartItemDOM.remove(), 250);
    });

    cart = [];
    localStorage.removeItem('cart');
    countCartTotal();
    document.querySelector('.cart-footer').remove();

    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
        addToCartButtonDOM.innerText = 'Adicionar formulário';
        addToCartButtonDOM.disabled = false;
    });
}
console.log(clearCart);

function checkout() {
        let paypalFormHTML = `
    <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="sachin-321@gmail.com">
    `;
        
        cart.forEach((cartItem, index) => {
            ++index;
            paypalFormHTML += `
            <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
            <input type="hidden" name="amount_${index}" value="${cartItem.price}">
            <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">
            `;
        });

            paypalFormHTML += `
        <input type="submit" value="PayPal">
    </form>
    <div class ="overlay"></div>
    `;

            document.querySelector('body').insertAdjacentHTML('beforeend', paypalFormHTML);
            document.getElementById('paypal-form').submit();
}

//Function to calculate total amount
function countCartTotal() {
    let cartTotal = 0;
    cart.forEach(cartItem => (cartTotal += cartItem.quantity * cartItem.price));
    document.querySelector('[data-action="CHECKOUT"]').innerText = `Pay $${cartTotal}`;
}

//Function to save cart on changes
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartTotal();
}