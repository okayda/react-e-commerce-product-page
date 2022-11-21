import { useEffect, useReducer, createContext } from "react";
import CartItem from "../components/Cart/CartItem";

export const CartContext = createContext();

const reducer = function (state, action) {
  if (action.type === "ADD") {
    let existed;

    // It will increment the existed product in the cart
    if (state.length > 0)
      existed = state.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...action.payload,
            piece: (cartItem.piece += action.payload.piece),
          };
        }
      });

    // It will add the new product in the cart
    return existed ? existed : state.concat(action.payload);
  }

  if (action.type === "REMOVE") {
    return state.filter((cartItem) => {
      if (cartItem.piece >= 2 && cartItem.id === action.payload.id) {
        return {
          ...cartItem,
          piece: (cartItem.piece -= 1),
        };
      }

      // will return different cart item &
      // will remove the deleted cart item. if the piece become 0
      if (cartItem.id !== action.payload.id) return cartItem;
    });
  }
};

const getCartsLocalStorage = function () {
  const carts = localStorage.getItem("carts");
  if (carts) return JSON.parse(carts);
  return [];
};

export const CartProvider = function (props) {
  const [carts, dispatch] = useReducer(reducer, getCartsLocalStorage());

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const contextObj = {
    myCart: {
      carts,
      dispatch,
    },
  };

  return (
    <CartContext.Provider value={contextObj}>
      {props.children}
    </CartContext.Provider>
  );
};
