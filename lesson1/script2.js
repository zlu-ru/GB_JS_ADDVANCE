'use strict'

const products = [
    { title: 'Shirt', description: 'Lorem ipsum dolor sit amet', price: 150 },
    { title: 'Socks', description: 'Lorem ipsum dolor sit amet', price: 50 },
    { title: 'Jacket', description: 'Lorem ipsum dolor sit amet', price: 350 },
    { title: 'Shoes', description: 'Lorem ipsum dolor sit amet', price: 250 },
    { title: 'Shirt', description: 'Lorem ipsum dolor sit amet', price: 150 },
    { title: 'Socks', description: 'Lorem ipsum dolor sit amet', price: 50 },
    { title: 'Jacket', description: 'Lorem ipsum dolor sit amet', price: 350 },
    { title: 'Shoes', description: 'Lorem ipsum dolor sit amet', price: 250 },
    { title: 'Shirt', description: 'Lorem ipsum dolor sit amet', price: 150 },
    { title: 'Socks', description: 'Lorem ipsum dolor sit amet', price: 50 },
    { title: 'Jacket', description: 'Lorem ipsum dolor sit amet', price: 350 },
    { title: 'Shoes', description: 'Lorem ipsum dolor sit amet', price: 250 },
];

const renderProductItem = (title, description, price) => {
    return `<div class="product">
    <div class="product_img"></div>
    <div class="product_title">${title}</div>
    <div class="product_description">${description}</div>
    <div class="product_wrapper">
        <div class="product_price">${price} rub</div>
        <button class="product_buyBtn">Buy now</button>
    </div>
    </div>`;
};

const renderProductsList = (list) => {
    let productsList = list.forEach(elem => {
        document.querySelector('.wrapper').insertAdjacentHTML('beforeend', renderProductItem(elem.title, elem.description, elem.price));
    });
}

renderProductsList(products);