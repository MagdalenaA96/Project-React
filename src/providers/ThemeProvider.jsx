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

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import PropTypes from "prop-types";

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
        h1: {
            color: "rgb(255, 255, 255)",
            fontSize: 34,
            fontWeight: 400,
            letterSpacing: 0.25,
            lineHeight: 1.235,
        },
    },

    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderBottomColor: "rgba(255, 255, 255, 0.42)",
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
    },
});

theme = responsiveFontSizes(theme);

const MyAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ backgroundColor: theme.palette.background.paper }}
            >
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, color: "rgb(255, 255, 255)" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "rgba(255, 255, 255, 0.87)" }}
                    >
                        My app
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

MyAppBar.propTypes = {
    appBarProps: PropTypes.object,
};

export const ThemeProvider = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <MyAppBar />
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                {children}
            </Container>
        </MuiThemeProvider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
