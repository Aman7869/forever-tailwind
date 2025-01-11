import "./index.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import { ProductContext } from "./utils/context";
import { useState } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);
  return (
    <div className="App font-prata">
      <ProductContext.Provider value={{ productsList,setProductsList }}>
        <Routes>
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
