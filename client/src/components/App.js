import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import ProductPage from "./views/ProductPage/ProductPage";
import CartPage from "./views/CartPage/CartPage";
import TrackOrder from "./views/MyAccount/TrackOrder";
import Faq from "./views/Info/Faq";
import Contact from "./views/Info/Contact";
import OrderHistory from "./views/MyAccount/OrderHistory";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
          <Route
            exact
            path="/product/:productId"
            component={Auth(ProductPage, null)}
          />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/track" component={Auth(TrackOrder, true)} />
          <Route exact path="/history" component={Auth(OrderHistory, true)} />
          <Route exact path="/faq" component={Auth(Faq, null)} />
          <Route exact path="/contact" component={Auth(Contact, null)} />



        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
