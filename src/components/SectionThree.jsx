import { RestaurantMenu } from "@mui/icons-material";
import { Box, Button, Grid, Stack, styled, Typography } from "@mui/material";
import Egg from "../assets/egg.avif";
import React from "react";
import Fruit_Basket from "../assets/fruit_basket.png";
import Onion from "../assets/onion.png";

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

const StyledImageCategories = styled("img")(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        width: 150,
        height: 150,
    },
    [theme.breakpoints.up("sm")]: {
        width: 250,
        height: 250,
    },
    objectFit: "cover",
}));

const TitleFoodCategories = styled(({ ...props }) => (
    <Typography variant="h6" {...props} />
))(({ theme, color }) => ({
    [theme.breakpoints.up("xs")]: {
        fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 40,
    },
    color: theme.palette[color]?.main || color || "inherit",
}));
const TextFoodCategories = styled(({ ...props }) => (
    <Typography variant="h5" {...props} />
))(({ theme }) => ({
    fontWeight: 600,
    [theme.breakpoints.up("xs")]: {
        fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: 50,
    },
}));
const ContentFoodCategories = styled(({ ...props }) => (
    <Typography variant="body1" {...props} />
))(({ theme }) => ({
    color: theme.palette.text.secondary,
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
            <Box mt={10}>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} p={10}>
                        <TitleFoodCategories color="warning">
                            Veggie Life
                        </TitleFoodCategories>
                        <TextFoodCategories>
                            Simple way of Eating delicious
                        </TextFoodCategories>
                        <ContentFoodCategories>
                            Keep healthy food readily available when you get
                            hungry, you are more likely to eat the first things
                            you see on the counter
                        </ContentFoodCategories>
                        <Button
                            variant="outlined"
                            color="warning"
                            sx={{ mt: 2 }}
                        >
                            Explorer Our Story
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        order={{ xs: 1, sm: 2 }}
                        textAlign="center"
                    >
                        <StyledImageCategories
                            src={Fruit_Basket}
                            alt="fruit basket"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        order={{ xs: 3, sm: 3 }}
                        textAlign="center"
                    >
                        <StyledImageCategories src={Onion} alt="fruit basket" />
                    </Grid>
                    <Grid item xs={12} sm={6} order={{ xs: 4, sm: 4 }} p={10}>
                        <TitleFoodCategories color="success">
                            Veggie Life
                        </TitleFoodCategories>
                        <TextFoodCategories>
                            Simple way of Eating delicious
                        </TextFoodCategories>
                        <ContentFoodCategories>
                            Keep healthy food readily available when you get
                            hungry, you are more likely to eat the first things
                            you see on the counter
                        </ContentFoodCategories>
                        <Button
                            variant="outlined"
                            color="success"
                            sx={{ mt: 2 }}
                        >
                            Explorer Our Story
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SectionThree;
