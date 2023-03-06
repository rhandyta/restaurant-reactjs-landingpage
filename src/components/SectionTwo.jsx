import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function SectionTwo() {
    return (
        <Box height="100vh">
            <Stack direction="column" spacing={1.5} alignItems="center">
                <Typography variant="h5" color="#ffc400" component="h6">
                    Delicious
                </Typography>
                <Typography variant="h4" component="h6" fontWeight={500}>
                    Food Categories
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    maxWidth={480}
                >
                    Classify foods to make a good mix of thickness and thickness
                    and maintain a balance nutrition
                </Typography>
            </Stack>
        </Box>
    );
}

export default SectionTwo;
