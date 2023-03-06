import { Box, Stack, Typography } from "@mui/material";
import Pancake from "../assets/pancake.png";
import Pancake2 from "../assets/pancake2.png";
import Pancake3 from "../assets/pancake3.png";
import React from "react";

function SectionTwo() {
    return (
        <Box height="100vh">
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
                <Box textAlign="center" maxWidth={250}>
                    <Box
                        height={200}
                        width={250}
                        sx={{
                            backgroundImage: `url(${Pancake2})`,
                        }}
                    ></Box>
                    <Typography variant="h6" fontWeight={600}>
                        Delicious Pancake
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={14}
                        fontWeight={400}
                        lineHeight={2}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, veniam.
                    </Typography>
                </Box>
                <Box textAlign="center" maxWidth={250}>
                    <Box
                        height={200}
                        width={250}
                        sx={{
                            backgroundImage: `url(${Pancake3})`,
                            backgroundPosition: "center",
                        }}
                    ></Box>
                    <Typography variant="h6" fontWeight={600}>
                        Delicious Pancake
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={14}
                        fontWeight={400}
                        lineHeight={2}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, veniam.
                    </Typography>
                </Box>
                <Box textAlign="center" maxWidth={250}>
                    <Box
                        height={200}
                        width={250}
                        sx={{
                            backgroundImage: `url(${Pancake})`,
                            backgroundPosition: "center",
                        }}
                    ></Box>
                    <Typography variant="h6" fontWeight={600}>
                        Delicious Pancake
                    </Typography>
                    <Typography
                        variant="body1"
                        fontSize={14}
                        fontWeight={400}
                        lineHeight={2}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, veniam.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default SectionTwo;
