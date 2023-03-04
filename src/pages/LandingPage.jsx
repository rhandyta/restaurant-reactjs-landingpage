import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
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
                    <Container sx={{ height: "80%" }}>
                        <Stack
                            sx={{
                                width: {
                                    xs: "70%",
                                    sm: "70%",
                                    md: "60%",
                                },
                            }}
                            height="100%"
                            direction="column"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h6"
                                fontWeight="600"
                                sx={{
                                    fontSize: {
                                        xs: 14,
                                        sm: 21,
                                        md: 25,
                                    },
                                }}
                            >
                                Recipes Online
                            </Typography>
                            <Typography
                                variant="h4"
                                fontSize={80}
                                lineHeight={1}
                                fontWeight={700}
                                my={2}
                                sx={{
                                    fontSize: {
                                        xs: 32,
                                        sm: 55,
                                        md: 80,
                                    },
                                }}
                            >
                                Breakfast Special menu
                            </Typography>
                            <Typography
                                variant="body1"
                                fontWeight={300}
                                sx={{
                                    fontSize: {
                                        xs: 14,
                                        sm: 21,
                                    },
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eveniet optio dolores error
                                fugit aspernatur, culpa maxime cum.
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default LandingPage;
