import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData, sendData } from "./store/cart-action";

import { dataContent, dataImgs } from "./components/Product/Data/ShoesData";

import Header from "./components/Layout/Header";
import Product from "./components/Product/Product";

import Cart from "./components/Cart/Cart";
import MobileMenu from "./components/Layout/MobileMenu";

import "./App.scss";

let initial = true;

function App() {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.carts);

  const [activeCart, setActiveCart] = useState(false);
  const displayCart = function (e) {
    e.stopPropagation();
    setActiveCart((prev) => (prev ? !prev : !prev));
  };

  const [activeMobileNav, setActiveMobileNav] = useState(false);
  const displayMobileNav = function (e) {
    e.stopPropagation();
    setActiveMobileNav((prev) => (prev ? !prev : !prev));
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    dispatch(sendData(cartData));
  }, [cartData, dispatch]);

  return (
    <>
      <MobileMenu
        activeMobileNav={activeMobileNav}
        displayMobileNav={displayMobileNav}
      />
      {activeCart ? <Cart onCartClick={displayCart} /> : ""}

      <Header onCartClick={displayCart} displayMobileNav={displayMobileNav} />
      <Product dataContent={dataContent} dataImgs={dataImgs} />
    </>
  );
}

export default App;
