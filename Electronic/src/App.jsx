import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyState from "./context/data/MyState";
// USER PAGES
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import NoPage from "./pages/NoPage";

// ADMIN PAGES
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageStock from "./pages/admin/ManageStock";
import AdminOrders from "./pages/admin/AdminOrders";

// COMMON COMPONENTS
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <MyState>
      <Router>
        {/* Navbar on all non-admin pages */}

        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/manage-products" element={<ManageProducts />} />
          <Route path="/admin/manage-stock" element={<ManageStock />} />
          <Route path="/admin/orders" element={<AdminOrders />} />

          {/* NO PAGE */}
          <Route path="/*" element={<NoPage />} />
        </Routes>

        {/* Footer on all non-admin pages */}
      </Router>
    </MyState>
  );
}

export default App;
