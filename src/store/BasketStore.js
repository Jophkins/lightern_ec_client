import {makeAutoObservable} from "mobx";

export default class BasketStore {
  constructor() {
    this._basketProducts = []
    makeAutoObservable(this)
  }

  setBasketProducts(products) {
    this._basketProducts = products
  }

  get basketProducts() {
    return this._basketProducts
  }

}
