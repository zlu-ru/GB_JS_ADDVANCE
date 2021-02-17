"use strict";

class GoodsItem {
  constructor(product_id, product_name, price) {
    this.product_id = product_id;
    this.product_name = product_name;
    this.price = price;
    this.description = "Lorem ipsum dolor sit amet.";
  }

  render() {
    return `<div class="product" data-id = ${this.product_id}>
      <div class="product_img"></div>
      <div class="product_title">${this.product_name}</div>
      <div class="product_description">${this.description}</div>
      <div class="product_wrapper">
          <div class="product_price" data-value=${this.price}>${this.price}</div>
          <button class="product_buyBtn">КУПИТЬ</button>
      </div>
      </div>`;
  }
}
