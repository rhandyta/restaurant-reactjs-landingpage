import React from "react";
import { Button, Stack, styled, Typography } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
    width: "fit-content",
    color: theme.palette.text.secondary.contrastText,
    backgroundColor: theme.palette.text.primary,
    "&:hover": {
        backgroundColor: theme.palette.text.secondary,
    },
}));

function SectionOne() {
    return (
        <Stack
            sx={{
                width: {
                    xs: "70%",
                    md: "60%",
                },
            }}
            height="100%"
            direction="column"
            justifyContent="center"
        >
            <Stack paddingBottom={20} spacing={2}>
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
                    Eveniet optio dolores error fugit aspernatur, culpa maxime
                    cum.
                </Typography>
                <StyledButton
                    variant="contained"
                    sx={{
                        px: {
                            xs: 2,
                            sm: 4,
                        },
                        py: 1.5,
                        borderRadius: 20,
                    }}
                >
                    EXPLORER NOW
                </StyledButton>
            </Stack>
        </Stack>
    );
}

export default SectionOne;
