import { useState } from "react";
import Header from "./components/Layout/Header";
import { dataContent, dataImgs } from "./components/Product/Data/ShoesData";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
  const [activeCart, setActiveCart] = useState(false);
  const displayCart = function () {
    setActiveCart((prev) => (prev ? !prev : !prev));
  };

  return (
    <>
      <Header onCartClick={displayCart} />
      {activeCart ? <Cart onCartClick={displayCart} /> : ""}
      <Product dataContent={dataContent} dataImgs={dataImgs} />
    </>
  );
}

export default App;
