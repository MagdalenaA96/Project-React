import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useAppBarState } from "../contexts/appBarContext/useAppBarState";

export const MyAppBar = () => {
    const { appBarSettings } = useAppBarState();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ margin: appBarSettings.margin }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: appBarSettings.backgroundColor,
                    height: appBarSettings.height,
                    borderBottom: appBarSettings.borderBottom,
                    padding: appBarSettings.padding,
                }}
            >
                <Toolbar
                    variant="dense"
                    sx={{
                        display: "flex",
                        height: "100%",
                    }}
                >
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                            height: "48px",
                            width: "48px",
                            color: appBarSettings.menuIconColor,
                            alignSelf: appBarSettings.alignSelf,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            variant={appBarSettings.titleTypography}
                            component="div"
                            sx={{
                                flexGrow: 1,
                                color: "rgba(255, 255, 255, 0.87)",
                            }}
                        >
                            {appBarSettings.title}
                        </Typography>
                        {appBarSettings.subtitle && (
                            <Typography variant="h4" component="p">
                                <span>Management / </span>
                                <span
                                    style={{
                                        color: "rgba(255, 255, 255, 0.5)",
                                    }}
                                >
                                    users
                                </span>
                            </Typography>
                        )}
                    </Box>
                    {appBarSettings.showIconButton && (
                        <div
                            style={{
                                display: "flex",
                                alignSelf: "flex-start",
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                sx={{ color: "rgba(255, 255, 255, 0.56)" }}
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    My account
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
