import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import MainView from "./views/MainView";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Sell from "./components/Sell";
import Searched from "./components/Searched";
import CheckOut from "./components/CheckOut";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<MainView />} />
            <Route path=':id' element={<Product />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="sell" element={<Sell />} />
            <Route path="cart" element={<Cart />} />
            <Route path="searched" element={<Searched />} />
            <Route path="checkout" element={<CheckOut />} />
        </Route>
    )
)