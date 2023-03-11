import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import BackgroundImageHero from "../assets/background.avif";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";

function LandingPage() {
    return (
        <>
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
                <Container sx={{ height: "100%" }}>
                    <SectionOne />
                    <SectionTwo />
                    <SectionThree />
                    <SectionFour />
                </Container>
            </Box>
        </>
    );
}

export default LandingPage;
