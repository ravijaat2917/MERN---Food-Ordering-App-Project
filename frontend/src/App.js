import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./Components/Navbar";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="App ">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
