import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";

function Router() {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Router;
