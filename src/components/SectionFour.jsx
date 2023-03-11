import { RestaurantMenu } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CardFood from "./CardFood";

import Pancake from "../assets/pancake.png";
import Pancake2 from "../assets/pancake2.png";

function SectionFour() {
    return (
        <Box
            sx={{
                mt: 5,
            }}
        >
            <Stack direction="column" alignItems="center">
                <RestaurantMenu sx={{ fontSize: 35 }} color="warning" />
                <Typography
                    variant="h4"
                    component="h5"
                    fontWeight={500}
                    mb={3}
                    mt={1.5}
                >
                    Recommend Items
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
                    width="100%"
                >
                    <CardFood
                        imageUrl={Pancake}
                        nameFood="Delicious Pancake"
                        descriptionFood="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus."
                        price={12}
                    />
                    <CardFood
                        imageUrl={Pancake2}
                        nameFood="Delicious Pancake"
                        descriptionFood="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus."
                        price={12}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}

export default SectionFour;
