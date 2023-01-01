import { cartMapActions } from "./cart-slice";

export const getData = function () {
  return function (dispatch) {
    let data = [];
    const carts = localStorage.getItem("carts");
    if (carts) data = JSON.parse(carts);

    dispatch(cartMapActions.replaceCart({ carts: data }));
  };
};

export const sendData = function (carts) {
  return function (dispatch) {
    localStorage.setItem("carts", JSON.stringify(carts));
  };
};
