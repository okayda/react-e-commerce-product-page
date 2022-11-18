import Header from "./components/Layout/Header";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <Product />
    </>
  );
}

export default App;
