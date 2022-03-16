import React, {useEffect} from "react";
import DropDownMenu from "../components/DropDownMenu";
// import MenuDrawer from '../components/MenuDrawer';
import { Button, AppBar, Box, Toolbar } from "@mui/material/";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
// import { changeTheme, getTheme } from "../store/currentViewSlice";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import {
  getCurrentEndpoint,
  changeMetric,
  resetRunValue,
} from "../store/currentViewSlice";
import { selectRunList } from "../store/dataSlice";
import { ThemeContext } from "@emotion/react";
import Logo from "../assets/vantage-logo.svg";

const TitleContainer = () => {
  const dispatch = useDispatch();
  // const mode = useSelector(getTheme);
  const currentEndpoint = useSelector(getCurrentEndpoint);
  const runList = useSelector(selectRunList);

  const handleClick = () => {
    dispatch(changeMetric("default"));
    dispatch(resetRunValue(runList[runList.length - 1]));
  };

  // Set the selected run to the latest initially
  useEffect(() => {
    dispatch(resetRunValue(runList[runList.length - 1]));
  }, []);

  return (
    <div id='titleContainer'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar id='nav-bar'>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logo style={{ height: "50px" }} />
              {/* <MenuDrawer /> */}
              <Typography
                color='text.primary'
                variant='h6'
                component='div'
                marginLeft='20px'
                sx={{ flexGrow: 1 }}
              >
                Vantage
              </Typography>
            </Box>
            {/* <Brightness5Icon fontSize="small"/> */}

            <Box
              sx={{ display: "flex", cursor: "pointer" }}
              onClick={handleClick}
            >
              <Typography
                variant='h6'
                component='div'
                color='text.primary'
                sx={{ px: 1 }}
              >
                Current Endpoint:
              </Typography>

              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                {currentEndpoint}
              </Typography>
            </Box>

            <DropDownMenu />
            {/* <Switch
              className='darkModeSwitch'
              checked={mode === "dark"}
              onChange={() => dispatch(changeTheme())}
              inputProps={{ "aria-label": "controlled" }}
            />
            <DarkModeIcon fontSize='small' /> */}
            {/* <Button color="inherit">Refresh</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default TitleContainer;
