import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import BackgroundImageHero from "../assets/background.avif";
import SectionOne from "../components/SectionOne";

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
                    <Container sx={{ height: "80%" }}>
                        <SectionOne />
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default LandingPage;
