import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function CardFood({ imageUrl, nameFood, descriptionFood, price }) {
    return (
        <Box
            sx={{
                display: price ? "flex" : null,
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                textAlign: {
                    xs: "center",
                    md: price ? "left" : "center",
                },
            }}
        >
            <Box
                height={200}
                width={250}
                mx="auto"
                sx={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></Box>
            <Stack
                sx={{
                    maxWidth: {
                        xs: "fit-content",
                        md: 250,
                    },
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    {nameFood}
                </Typography>
                <Typography
                    variant="body1"
                    fontWeight={400}
                    lineHeight={2}
                    color="text.secondary"
                >
                    {descriptionFood}
                </Typography>
                {price && (
                    <Typography variant="body1" color="text.secondary">
                        Discont
                        <Box
                            component="span"
                            fontSize={24}
                            color="error.main"
                            ml={1}
                        >
                            $12
                        </Box>
                    </Typography>
                )}
            </Stack>
        </Box>
    );
}

export default CardFood;
