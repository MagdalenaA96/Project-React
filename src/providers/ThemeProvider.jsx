import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import PropTypes from "prop-types";

import { MyAppBar } from "../components/MyAppBar";
import { AppBarContextProvider } from "../contexts/appBarContext/AppBarContextProvider";

let theme = createTheme({
    palette: {
        primary: {
            main: "rgb(144, 202, 249)",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        background: {
            default: "rgb(48, 48, 48)",
            paper: "rgb(66, 66, 66)",
        },
        action: {
            disabledBackground: "rgba(184, 184, 184, 1)",
            disabled: "rgb(84, 84, 84)",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            color: "rgb(255, 255, 255)",
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: 0.25,
            lineHeight: 1.235,
            marginBottom: 8,
        },
        h2: {
            color: "rgb(255, 255, 255)",
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: 1.334,
            textAlign: "center",
        },
        h3: {
            color: "rgba(255,255,255, 0.87)",
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 0.15,
            lineHeight: 1.6,
            textAlign: "left",
        },
        h4: {
            color: "rgba(255,255,255, 0.7)",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0.15,
            lineHeight: 1.5,
            textAlign: "left",
        },
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderBottomColor: "rgba(255, 255, 255, 0.42)",
                    margin: "0 0 16px",
                },
            },
        },

        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(255, 255, 255, 0.09)",
                    borderBottomColor: "rgba(255, 255, 255, 0.42)",
                    "& .MuiFilledInput-input": {
                        color: "rgba(255, 255, 255, 0.7)",
                    },
                    ":before": {
                        borderBottomColor: "rgba(255, 255, 255, 0.42)",
                    },
                    "::placeholder": {
                        color: "rgba(255, 255, 255, 0.5)",
                    },
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "rgba(255, 255, 255, 0.5)",
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <AppBarContextProvider>
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <MyAppBar />
                    <div style={{ display: "flex", flex: 1 }}>
                        <Container
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {children}
                        </Container>
                    </div>
                </div>
            </AppBarContextProvider>
        </MuiThemeProvider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
