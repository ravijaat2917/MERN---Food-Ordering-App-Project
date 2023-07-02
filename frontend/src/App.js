import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./Components/Navbar";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import OrdersPage from "./pages/OrdersPage";
import Footer from "./Components/Footer";
import SingleCategoryFood from "./pages/SingleCategoryFood";
import SingleRestaurantPage from "./pages/SingleRestaurantPage";

const App = () => {
  return (
    <div className="App ">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route
              path="/filter/item/:category"
              element={<SingleCategoryFood />}
            />
            <Route
              path="/filter/restaurant/:name"
              element={<SingleRestaurantPage />}
            />
            <Route
              path="/filter/item/:category/filter/restaurant/:name"
              element={<SingleRestaurantPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
