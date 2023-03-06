import { Box, Typography } from "@mui/material";
import React from "react";

function CardFood({ imageUrl, nameFood, descriptionFood }) {
    return (
        <Box textAlign="center" maxWidth={250}>
            <Box
                height={200}
                width={250}
                sx={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></Box>
            <Typography variant="h6" fontWeight={600}>
                {nameFood}
            </Typography>
            <Typography
                variant="body1"
                fontSize={14}
                fontWeight={400}
                lineHeight={2}
            >
                {descriptionFood}
            </Typography>
        </Box>
    );
}

export default CardFood;
