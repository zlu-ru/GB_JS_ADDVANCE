'use strict'

const goods = [
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

const renderGoodsItem = (title = 'productTitle', description = 'Lorem ipsum dolor sit amet', price = '150') => {
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


// вызывая renderGoodsItem мы изменяем элемент массива, но при этом элементы разделены
// друг от друга запятой, соответственно запятая вставляется в разметку, т.к. в InnerHTML
// мы кладем весь массив, включая разедлитель. 
// для исключения запятой массив можно объединить пустой строкой через join("")
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.description, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");
};

renderGoodsList(goods);