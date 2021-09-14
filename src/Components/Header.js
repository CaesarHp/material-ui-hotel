import React, { useEffect, useState, useMemo } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import HomeIcon from "@material-ui/icons/Home";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import CallIcon from "@material-ui/icons/Call";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
  return {
    appbar: {
      padding: "1rem 0",
      backgroundColor: "white",
    },
    toolbar: {
      width: "90%",
      margin: "0 auto",
    },
    offset: {
      ...theme.mixins.toolbar,
      margin: "1rem 0",
    },
    logo: {
      color: theme.palette.grey[800],
      fontFamily: "Cormorant Garamond",
      fontWeight: 600,
    },
    tabs: {
      marginLeft: "auto",
    },
    tab: {
      minWidth: 120,
      color: theme.palette.grey[800],
    },
    menuBtn: {
      marginLeft: "auto",
    },
    menuIcon: {
      color: theme.palette.grey[800],
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",

      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    divider: {
      backgroundColor: theme.palette.divider,
    },
    drawerBackBtn: {
      marginLeft: theme.spacing(1),
    },
  };
});

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const history = useHistory();

  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveIndex(0);
    } else if (location.pathname === "/booking") {
      setActiveIndex(1);
    } else if (location.pathname === "/contact") {
      setActiveIndex(2);
    } else {
      setActiveIndex(null);
    }
  }, [location]);

  const toggleDrawerHandler = (open) => (event) => {
    setDrawerState(open);
  };

  const tabsInfo = useMemo(
    () => [
      {
        name: "Home",
        link: "/home",
      },
      {
        name: "Booking",
        link: "/booking",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
    []
  );

  const drawerListItemInfo = useMemo(
    () => [
      {
        name: "Home",
        link: "/home",
        icon: <HomeIcon className={classes.drawerIcon} />,
      },
      {
        name: "Booking",
        link: "/booking",
        icon: <BookmarksIcon className={classes.drawerIcon} />,
      },
      {
        name: "Contact",
        link: "/contact",
        icon: <CallIcon className={classes.drawerIcon} />,
      },
    ],
    [classes.drawerIcon]
  );

  const tabs = (
    <Tabs value={activeIndex} indicatorColor="primary" className={classes.tabs}>
      {tabsInfo.map((item, index) => (
        <Tab
          key={index}
          label={item.name}
          component={Link}
          to={item.link}
          className={classes.tab}
        />
      ))}
    </Tabs>
  );

  const drawList = (
    <List>
      {drawerListItemInfo.map((item, index) => (
        <ListItem
          key={index}
          button
          onClick={() => {
            history.push(item.link);
            setDrawerState(false);
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} className={classes.drawerTypo} />
        </ListItem>
      ))}
    </List>
  );

  const drawer = (
    <>
      <IconButton
        onClick={toggleDrawerHandler(true)}
        className={classes.menuBtn}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawerHandler(false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={toggleDrawerHandler(false)}
            className={classes.drawerBackBtn}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} light />
        {drawList}
      </Drawer>
    </>
  );

  return (
    <>
      <div>
        <ElevationScroll>
          <AppBar elevation={0} position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h5" component="h1" className={classes.logo}>
                SOHO Hotel
              </Typography>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.offset} />
      </div>
    </>
  );
}

export default Header;
