import { useState } from "react";
import Header from "./components/Layout/Header";
import { dataContent, dataImgs } from "./components/Product/Data/ShoesData";

import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import MobileMenu from "./components/Layout/MobileMenu";

import "./App.scss";

function App() {
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
