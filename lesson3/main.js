"use strict";

// let goods = new GoodsList();
// let basket = new Basket();

let goods = new GoodsList();
goods.fetchGoodsListPromise();
let cart = new Basket();

//получение данных с сервера через try - catch
//   async fetchGoodsList() {
//     try {
//       const response = await fetch(URL);
//       const goodsList = await response.json();
//       this.goods = this.render(goodsList);
//     } catch (err) {
//       console.log(err);
//     }
//   }
