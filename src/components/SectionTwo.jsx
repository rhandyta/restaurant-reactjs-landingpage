import { Box, Stack, Typography } from "@mui/material";
import Pancake from "../assets/pancake.png";
import Pancake2 from "../assets/pancake2.png";
import Pancake3 from "../assets/pancake3.png";
import React from "react";
import CardFood from "./CardFood";

function SectionTwo() {
    return (
        <Box
            sx={{
                height: {
                    xs: "auto",
                    sm: "100vh",
                },
            }}
        >
            <Stack direction="column" alignItems="center">
                <Typography variant="h5" color="#ffc400" component="h6">
                    Delicious
                </Typography>
                <Typography
                    variant="h4"
                    component="h5"
                    fontWeight={500}
                    mb={3}
                    mt={1.5}
                >
                    Food Categories
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                    color="text.secondary"
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
                    Classify foods to make a good mix of thickness and thickness
                    and maintain a balance nutrition
                </Typography>
            </Stack>
            <Stack
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
                mt={5}
            >
                <CardFood
                    imageUrl={Pancake}
                    nameFood="Delicious Pancake"
                    descriptionFood="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus."
                />
                <CardFood
                    imageUrl={Pancake2}
                    nameFood="Delicious Pancake"
                    descriptionFood="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus."
                />
                <CardFood
                    imageUrl={Pancake3}
                    nameFood="Delicious Pancake"
                    descriptionFood="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus."
                />
            </Stack>
        </Box>
    );
}

export default SectionTwo;
