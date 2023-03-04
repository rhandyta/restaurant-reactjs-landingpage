import { TakeoutDining } from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Link,
    Stack,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const NavToolbar = styled(Toolbar)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 700,
}));

function Navbar() {
    return (
        <AppBar
            sx={{ bgcolor: "transparent", boxShadow: "none" }}
            position="sticky"
        >
            <Container>
                <NavToolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flex: 1,
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <TakeoutDining
                            color="inherit"
                            sx={{
                                fontSize: 25,
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="inherit"
                            sx={{ fontSize: 20 }}
                        >
                            RESTAURANT
                        </Typography>
                    </Stack>
                    <Box
                        sx={{
                            flex: 5,
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                            justifyContent: "end",
                            gap: {
                                sm: 3,
                                md: 8,
                            },
                            mx: {
                                sm: 3,
                                md: 10,
                            },
                        }}
                    >
                        <Link href="#" color="inherit" underline="hover">
                            Home
                        </Link>
                        <Link href="#" color="inherit" underline="hover">
                            Delivery
                        </Link>
                        <Link href="#" color="inherit" underline="hover">
                            Pricing
                        </Link>
                        <Link href="#" color="inherit" underline="hover">
                            FAQs
                        </Link>
                        <Link href="#" color="inherit" underline="hover">
                            Contact
                        </Link>
                    </Box>
                    <Box>
                        <Button
                            variant="outlined"
                            color="inherit"
                            sx={{
                                borderRadius: 10,
                                display: {
                                    xs: "none",
                                    sm: "flex",
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                </NavToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
