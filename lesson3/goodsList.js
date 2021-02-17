"use strict";

class GoodsList {
  goods = [];

  render = (list) => {
    list.forEach((elem) => {
      const goodItem = new GoodsItem(
        elem.id_product,
        elem.product_name,
        elem.price
      );
      let goodsListHTML = goodItem.render();
      document
        .querySelector(".wrapper")
        .insertAdjacentHTML("beforeend", goodsListHTML);
    });
  };

  //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //   НЕ ПОНИМАЮ ПОЧЕМУ КЛИК ДВА РАЗА ?!?!
  //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  addListener() {
    const buttons = document.querySelectorAll(".product_buyBtn");
    buttons.forEach((elem) => {
      addEventListener("click", function (event) {
        let product = event.target.parentNode.parentNode;
        let product_name = product.querySelector(".product_title").innerHTML;
        let product_price = product.querySelector(
          ".product_wrapper > .product_price"
        ).dataset.value;
        let product_id = product.dataset.id;
        cart.addItem(Number(product_id), product_name, Number(product_price));
      });
    });
  }

  //получение данных с сервера через promice fetch'a
  fetchGoodsListPromise() {
    fetch(GET_GOODS_LIST_DATA_URL)
      .then((r) => {
        const data = r.json();
        return data;
      })
      .then((r) => {
        this.goods = this.render(r);
        this.addListener();
      });
  }
}
