"use strict";
/* Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
    Некая сеть фастфуда предлагает несколько видов гамбургеров:
        a. Маленький (50 рублей, 20 калорий).
        b. Большой (100 рублей, 40 калорий).
    
    Гамбургер может быть с одним из нескольких видов начинок (обязательно):
    
        a. С сыром (+10 рублей, +20 калорий).
        b. С салатом (+20 рублей, +5 калорий).
        c. С картофелем (+15 рублей, +10 калорий).
    
    Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить
    майонезом (+20 рублей, +5 калорий). */

const sizes = [
  { size: "small", price: 50, ccal: 20 },
  { size: "big", price: 100, ccal: 40 },
];

const stuffings = [
  { stuffingType: "cheese", price: 10, ccal: 20 },
  { stuffingType: "salat", price: 20, ccal: 5 },
  { stuffingType: "potatoes", price: 15, ccal: 10 },
];

const toppings = [
  { toppingType: "spice", price: 15, ccal: 0 },
  { toppingType: "sause", price: 20, ccal: 5 },
];

class Burger {
  size;
  price;
  ccal;
  burgerStuffings = [];
  burgerToppings = [];
  totalPrice;
  totalCalories;

  constructor(size, stuffingType) {
    this.size = size;
    this.price = sizes.find((item) => item.size === size).price;
    this.ccal = sizes.find((item) => item.size === size).ccal;
    this.burgerStuffings.push(this.#getStuffing(stuffingType, stuffings));
    this.totalPrice = this.calculatePrice();
    this.totalCalories = this.calculateCalories();
  }

  //получить параметры добавки по ее имени
  #getTopping(toppingType) {
    return toppings.find((item) => item.toppingType === toppingType);
  }
  //получить параметры начинки по ее имени
  #getStuffing(stuffingType, stuffingArray) {
    let stuff = stuffingArray.find(
      (item) => item.stuffingType === stuffingType
    );
    return stuff;
  }

  #getTotalPrice(property) {
    let totalValue = 0;
    property.forEach((item) => (totalValue = totalValue + item.price));
    return totalValue;
  }

  #getTotalCalories(property) {
    let totalValue = 0;
    property.forEach((item) => (totalValue = totalValue + item.ccal));
    return totalValue;
  }

  //добавить начинку
  addStuffing(stuffingType) {
    if (
      !this.burgerStuffings.find((item) => item.stuffingType === stuffingType)
    ) {
      this.burgerStuffings.push(this.#getStuffing(stuffingType, stuffings));
    }
    burg.calculateCalories();
    burg.calculatePrice();
  }

  //удалить начинку
  removeStaffing(stuffingType) {
    if (
      this.burgerStuffings.includes(
        this.#getStuffing(stuffingType, this.burgerStuffings)
      ) &
      (this.burgerStuffings.length > 1)
    ) {
      let stuffingIndex = this.#getStuffing(stuffingType, this.burgerStuffings);
      this.burgerStuffings.splice(
        this.burgerStuffings.indexOf(stuffingIndex),
        1
      );
      burg.calculateCalories();
      burg.calculatePrice();
    } else alert("Должна остаться хотя бы одна начинка");
  }

  //выбор размер бургера
  chooseSize(sizeType) {
    if (!(this.size === sizeType)) {
      this.size = sizes.find((item) => item.size === sizeType).size;
      this.price = sizes.find((item) => item.size === sizeType).price;
      this.ccal = sizes.find((item) => item.size === sizeType).ccal;
      burg.calculateCalories();
      burg.calculatePrice();
    }
  }

  //добавить один дополнительный ингридиент
  addTopping(toppingType) {
    this.burgerToppings.push(this.#getTopping(toppingType));
    burg.calculateCalories();
    burg.calculatePrice();
  }

  //удалить один дополнительный ингридиент
  removeTopping(toppingType) {
    if (this.burgerToppings.includes(this.#getTopping(toppingType))) {
      let toppingIndex = this.#getTopping(toppingType, this.burgerToppings);
      this.burgerToppings.splice(this.burgerToppings.indexOf(toppingIndex), 1);
      burg.calculateCalories();
      burg.calculatePrice();
    }
  }

  //посчитать стоимость
  calculatePrice() {
    this.totalPrice =
      this.price +
      this.#getTotalPrice(this.burgerStuffings) +
      this.#getTotalPrice(this.burgerToppings);
    return this.totalPrice;
  }
  //посчитать калорийность
  calculateCalories() {
    this.totalCalories =
      this.ccal +
      this.#getTotalCalories(this.burgerStuffings) +
      this.#getTotalCalories(this.burgerToppings);
    return this.totalCalories;
  }
}

let burg = new Burger("big", "cheese");
console.log(burg);
burg.chooseSize("small");
console.log(burg);
burg.addTopping("spice");
console.log(burg);
burg.addStuffing("potatoes");
console.log(burg);
burg.removeStaffing("potatoes");
console.log(burg);
burg.addTopping("sause");
console.log(burg);
