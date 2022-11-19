import Header from "./components/Layout/Header";
import { dataContent, dataImgs } from "./components/Product/Data/ShoesData";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import "./App.scss";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <Product dataContent={dataContent} dataImgs={dataImgs} />
    </>
  );
}

export default App;
