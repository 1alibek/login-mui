import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/login";

const Home = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit" onClick={toggleDrawer(true)}>
            login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={handleLogout}>
            <div onClick={handleClick}>
              <Login />
            </div>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Home;
