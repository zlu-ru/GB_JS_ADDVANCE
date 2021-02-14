"use strict";
// 1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
// какие методы понадобятся для работы с этими сущностями.
// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

const products = [
  { title: "Shirt", description: "Lorem ipsum dolor sit amet", price: 150 },
  { title: "Socks", description: "Lorem ipsum dolor sit amet", price: 50 },
  { title: "Jacket", description: "Lorem ipsum dolor sit amet", price: 350 },
  { title: "Shoes", description: "Lorem ipsum dolor sit amet", price: 250 },
  { title: "Shirt", description: "Lorem ipsum dolor sit amet", price: 150 },
  { title: "Socks", description: "Lorem ipsum dolor sit amet", price: 50 },
  { title: "Jacket", description: "Lorem ipsum dolor sit amet", price: 350 },
  { title: "Shoes", description: "Lorem ipsum dolor sit amet", price: 250 },
  { title: "Shirt", description: "Lorem ipsum dolor sit amet", price: 150 },
  { title: "Socks", description: "Lorem ipsum dolor sit amet", price: 50 },
  { title: "Jacket", description: "Lorem ipsum dolor sit amet", price: 350 },
  { title: "Shoes", description: "Lorem ipsum dolor sit amet", price: 250 },
];

// Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
// какие методы понадобятся для работы с этими сущностями.

class Cart {
  items = [];

  // добавить элемент в корзину по артикулу
  addItem() {}
  // удалить элемент из корзины по артикулу
  removeItem() {}
  // изменить количество товара по артикулу и указанному на странице корзины количеству
  changeItemCount({ venderCode }, count) {}
  //посчитать общее количество товаров в корзине
  calculateTotalPrice() {}
  //посчитать стоимость товаров в корзине
  calculateTotalPrice() {}
  // очистить корзину
  clear() {}
  // отрисовать корзину
  render() {}
}

class BascketItem {
  venderCode; //артикул
  count; //количество

  //добавить товар в избранное
  addToFavorite() {}
  //отрисовать товар в корзине
  paint() {}
}

class GoodsList {
  goods = [];

  #renderGoodsItem({ title, description, price }) {
    return `<div class="product">
    <div class="product_img"></div>
    <div class="product_title">${title}</div>
    <div class="product_description">${description}</div>
    <div class="product_wrapper">
        <div class="product_price">${price} rub</div>
        <button class="product_buyBtn">Buy now</button>
    </div>
    </div>`;
  }

  constructor(goods) {
    this.goods = goods;
  }

  render() {
    this.goods.forEach((elem) => {
      document
        .querySelector(".wrapper")
        .insertAdjacentHTML("beforeend", this.#renderGoodsItem(elem));
    });
  }
  // Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  //метод для подсчета стоимости товаров
  goodsCostCalculate() {
    if (this.goods.length === 0) return 0;
    return this.goods.reduce(function (sum, { price }) {
      return sum + price;
    }, 0);
  }
}

let list = new GoodsList(products);
list.render();
console.log(list.goodsCostCalculate());
