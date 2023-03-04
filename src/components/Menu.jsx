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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </MenuButton>
    );
}

export default Menu;
