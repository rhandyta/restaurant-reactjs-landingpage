import { Box, Paper } from "@mui/material";
import React from "react";

function LayoutAuth({ children }) {
    return (
        <Box
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Paper
                sx={{
                    width: {
                        xs: "100%",
                        sm: "500px",
                    },
                }}
            >
                {children}
            </Paper>
        </Box>
    );
}

export default LayoutAuth;
