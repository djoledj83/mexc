import {
    BrowserRouter,
    Route,
    Routes,
    Outlet
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Single from "../pages/Single";
// import Write from "../pages/Write";
import Navbar from "../pages/navbar/Navbar";
import Header from "../pages/header/Header";
import Footer from "../pages/footer/Footer";
import Features from "../pages/features/Features";
import WhatGPT3 from "../pages/whatGPT3/WhatGPT3";
import Possibility from "../pages/possibility/Possibility";
import Dashboard from "../pages/Dashboard";
import AuthRoute from './../components/AuthRoute';
import BasicRoute from './../components/BasicRoute';

const url = "https://mexc.milosdjokovic.com/";

function Router() {
    const Layout = () => {
        return (
            <>
                <Navbar />
                <Outlet />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <Footer />
            </>
        );
    };

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Header />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Register />} />
                    <Route path="dashboard" element={<Dashboard />} />

                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}

export default Router