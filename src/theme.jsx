import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 680,
            md: 890,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#D32F2F", // merah tua
            light: "#FFCDD2", // merah muda
            dark: "#B71C1C", // merah gelap
            contrastText: "#FFFFFF", // putih
        },
        secondary: {
            main: "#1E88E5", // biru
            light: "#BBDEFB", // biru muda
            dark: "#0D47A1", // biru gelap
            contrastText: "#FFFFFF", // putih
        },
        text: {
            primary: "#212121", // hitam
            secondary: "#757575", // abu-abu
            disabled: "#BDBDBD", // abu-abu muda
        },
    },
    typography: {
        fontFamily: "Merriweather, sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
            letterSpacing: "0.5px",
        },
        h2: {
            fontWeight: 700,
            fontSize: "2rem",
            letterSpacing: "0.5px",
        },
        h3: {
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: "0.5px",
        },
        h4: {
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "0.5px",
        },
        h5: {
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.5px",
        },
        h6: {
            fontWeight: 700,
            fontSize: "0.875rem",
            letterSpacing: "0.5px",
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1rem",
            letterSpacing: "0.5px",
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: "0.875rem",
            letterSpacing: "0.5px",
        },
        body1: {
            fontWeight: 400,
            fontSize: "1rem",
            letterSpacing: "0.5px",
        },
        body2: {
            fontWeight: 400,
            fontSize: "0.875rem",
            letterSpacing: "0.5px",
        },
    },
});
