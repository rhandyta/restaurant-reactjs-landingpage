import React from "react";
import { Stack, Typography } from "@mui/material";
function SectionOne() {
    return (
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
                fontWeight={600}
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet optio dolores error fugit aspernatur, culpa maxime cum.
            </Typography>
        </Stack>
    );
}

export default SectionOne;
