import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

function Router() {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
        </Routes>
    );
}

export default Router;
