import React from "react";
import { Menu as MenuButton, MenuItem } from "@mui/material";
function Menu({ open, anchorEl, handleClose }) {
    return (
        <MenuButton
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                "aria-labelledby": "menu-button",
            }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <MenuItem onClick={handleClose}>Login</MenuItem>
        </MenuButton>
    );
}

export default Menu;
