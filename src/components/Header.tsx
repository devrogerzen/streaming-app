import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Styles.modules.ts";
import { useState } from "react";

const menuItems = [
  { name: "Home" },
  { name: "Now Playing" },
  { name: "Popular" },
  { name: "Tv Shows" },
];

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (
    /*event || */ _: React.ChangeEvent<{}>,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };

  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: "10px", background: "#1f1f1e" }}>
        <Toolbar>
          <Typography className="logo">ToditoStream</Typography>
          <Tabs
            className="navLinks"
            value={selectedTab}
            onChange={handleChange}
          >
            {menuItems.map((item, index) => (
              <Tab className="links" key={index} label={item.name} />
            ))}
          </Tabs>
          <Button className="loginBtn" variant="contained" color="secondary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
