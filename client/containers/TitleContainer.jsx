import React, { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
// import MenuDrawer from '../components/MenuDrawer';
import { Button, AppBar, Box, Toolbar } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getTheme } from "../store/currentViewSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { getCurrentEndpoint, changeMetric } from "../store/currentViewSlice";

const TitleContainer = () => {
  const dispatch = useDispatch();
  const mode = useSelector(getTheme);
  const currentEndpoint = useSelector(getCurrentEndpoint);

  return (
    <div id='titleContainer'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            {/* <MenuDrawer /> */}
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Vantage
            </Typography>
            {/* <Brightness5Icon fontSize="small"/> */}
            <DropDownMenu />
            <Typography
              variant='h6'
              component='div'
              sx={{ px: 1, cursor: "pointer" }}
              onClick={(_) => dispatch(changeMetric("default"))}
            >
              Current Endpoint:
            </Typography>
            <Typography
              variant='h4'
              component='div'
              sx={{ flexGrow: 1, cursor: "pointer"}}
              onClick={(_) => dispatch(changeMetric("default"))}
            >
              {currentEndpoint}
            </Typography>
            <Switch
              className='darkModeSwitch'
              checked={mode === "dark"}
              onChange={() => dispatch(changeTheme())}
              inputProps={{ "aria-label": "controlled" }}
            />
            <DarkModeIcon fontSize='small' />
            {/* <Button color="inherit">Refresh</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default TitleContainer;
