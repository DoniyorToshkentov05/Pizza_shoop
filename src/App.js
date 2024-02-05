import React, { createContext, useState } from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import { filterSliceAction } from "./redux/slices/filterSlice";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/404";

import Cart from "./pages/Cart";
import MainLayouts from "./layouts/MainLayouts";

export const SearchContext = createContext({
  cardPageVisible: false,
  setCardPageVisible: () => {},
});

function App() {
  const [cardPageVisible, setCardPageVisible] = useState(false);

  return (
    <SearchContext.Provider value={{ cardPageVisible, setCardPageVisible }}>
      
      <Routes>
        
        <Route path="/" element={<MainLayouts />}>
          <Route path="" element={<Home />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Cart />
    </SearchContext.Provider>
  );
}

export default App;