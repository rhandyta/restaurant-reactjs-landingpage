import { TakeoutDining } from "@mui/icons-material";
import {
    Box,
    Link,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";

function Footer() {
    return (
        <Stack
            mt={5}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-evenly"
            spacing={2}
        >
            <Stack maxWidth={200}>
                <Stack direction={{ xs: "column", sm: "row" }}>
                    <TakeoutDining
                        color="inherit"
                        sx={{
                            fontSize: {
                                xs: 20,
                                sm: 25,
                            },
                        }}
                    />
                    <Typography fontWeight={600} variant="h6">
                        Restaurant
                    </Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">
                    Good food is in this place come to contact us
                </Typography>
            </Stack>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 0, sm: 5 }}
            >
                <Stack>
                    <Typography variant="h6" fontWeight={600}>
                        Discovery
                    </Typography>
                    <List
                        component="div"
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "block",
                            },
                            direction: {
                                xs: "row",
                                sm: "column",
                            },
                        }}
                    >
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        Other
                                    </Link>
                                }
                            />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        Contact Us
                                    </Link>
                                }
                            />
                        </ListItem>
                    </List>
                </Stack>
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        FAQS
                    </Typography>
                    <List
                        component="div"
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "block",
                            },
                            direction: {
                                xs: "row",
                                sm: "column",
                            },
                        }}
                    >
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        About
                                    </Link>
                                }
                            />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        Your Journey
                                    </Link>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        Contact us
                    </Typography>
                    <List
                        component="div"
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "block",
                            },
                            direction: {
                                xs: "row",
                                sm: "column",
                            },
                        }}
                    >
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        Instagram
                                    </Link>
                                }
                            />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        Pinterest
                                    </Link>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Typography variant="h6" fontWeight={600}>
                        Others
                    </Typography>
                    <List component="div">
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        restaurant@restaurant.com
                                    </Link>
                                }
                            />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Link
                                        href="#"
                                        underline="hover"
                                        color="text.secondary"
                                    >
                                        +62 8264 2374 23
                                    </Link>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </Stack>
        </Stack>
    );
}

export default Footer;
