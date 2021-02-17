"use strict";

class Basket {
  goods = [];
  amount = 0;
  countGoods;

  // получить список товаров корзины
  getBusketItems() {
    fetch(GET_BASKET_DATA_URL)
      .then((r) => {
        const data = r.json();
        return data;
      })
      .then((r) => console.log(r));
  }

  // добавить товар в корзину по артикулу
  //   если такой товар уже есть, то увеличить его количество
  addItem(id_product, product_name, price) {
    let index = this.goods.findIndex((item) => {
      return item.id_product === id_product;
    });
    if (index < 0) {
      price = Number(price);
      this.goods.push({
        id_product: id_product,
        price: price,
        product_name: product_name,
        quantity: 1,
      });
    } else {
      this.goods[index].quantity++;
    }
    this.calculateTotalPrice();
    this.calculateTotalCount();
    console.log(this);
  }

  // удалить элемент из корзины по артикулу
  removeItem(id_product) {
    let index = this.goods.findIndex((item) => {
      return item.id_product === id_product;
    });
    this.goods.splice(index, 1);
  }

  // изменить количество товара по артикулу и указанному на странице корзины количеству
  changeItemCount() {}
  // очистить корзину
  clear() {
    this.goods.splice(0, this.goods.length);
  }
  // отрисовать корзину
  render() {}
  //посчитать общее количество товаров в корзине
  calculateTotalCount() {
    if ((this.goods.lenght = 0)) return;
    let count = 0;
    this.goods.forEach((elem) => {
      count = count + elem.quantity;
    });
    this.count = count;
  }

  //посчитать стоимость товаров в корзине
  calculateTotalPrice() {
    if ((this.goods.lenght = 0)) return;
    let amount = 0;
    this.goods.forEach((elem) => {
      amount = amount + elem.price * elem.quantity;
    });
    this.amount = amount;
  }
}
