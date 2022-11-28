import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductsList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
