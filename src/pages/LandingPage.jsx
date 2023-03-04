import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import BackgroundImageHero from "../assets/background.avif";

function LandingPage() {
    return (
        <>
            <Box>
                <Box
                    component="div"
                    sx={{
                        backgroundImage: `url(${BackgroundImageHero})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "100vh",
                    }}
                >
                    <Navbar />
                    <h1>xdsadasd</h1>
                </Box>
            </Box>
        </>
    );
}

export default LandingPage;
