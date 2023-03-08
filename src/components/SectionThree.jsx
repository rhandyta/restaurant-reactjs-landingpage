import { RestaurantMenu } from "@mui/icons-material";
import { Box, Stack, styled, Typography } from "@mui/material";
import Egg from "../assets/egg.avif";
import React from "react";

const StyledImg = styled("img")(({ theme }) => ({
    objectFit: "cover",
    objectPosition: "100% 60%",
    transform: "rotate(4deg)",
    [theme.breakpoints.up("xs")]: {
        borderRadius: "5px",
    },
    [theme.breakpoints.up("sm")]: {
        borderRadius: "200px",
    },
}));

function SectionThree() {
    return (
        <Box
            sx={{
                mt: {
                    xs: 5,
                    sm: 0,
                },
            }}
        >
            <Stack direction="column" alignItems="center">
                <RestaurantMenu sx={{ color: "#ffc400", fontSize: 35 }} />
                <Typography
                    variant="h4"
                    component="h5"
                    fontWeight={500}
                    mb={3}
                    mt={1.5}
                >
                    Popular Items
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                    sx={{
                        maxWidth: {
                            xs: 480,
                            sm: 580,
                        },
                        fontSize: {
                            xs: "1rem",
                            sm: "1.125rem",
                        },
                    }}
                >
                    Balance nutrition, cheap and delicious, good food for the
                    home
                </Typography>
            </Stack>

            <Stack direction="column" alignItems="center">
                <Box
                    sx={{
                        width: "80%",
                        height: {
                            xs: "300px",
                            sm: "200px",
                        },
                        border: {
                            xs: "none",
                            sm: "2px solid #66f542",
                        },
                        marginX: "auto",
                        borderRadius: "200px",
                        transform: "rotate(-4deg)",
                        marginY: "50px",
                    }}
                >
                    <StyledImg
                        src={Egg}
                        loading="lazy"
                        width="100%"
                        height="100%"
                    />
                </Box>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium rem eius cupiditate ipsam quas molestias.
                </Typography>
            </Stack>
        </Box>
    );
}

export default SectionThree;
