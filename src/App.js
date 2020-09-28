import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Home from "./tabs/Home";
import About from "./tabs/About";
import Social from "./tabs/Social";
import Articles from "./tabs/Articles";
import Memories from "./tabs/Memories";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'>
          <Tab label='Home' {...a11yProps(0)} />
          <Tab label='Articles' {...a11yProps(1)} />
          <Tab label='About Us' {...a11yProps(2)} />
          <Tab label='Social Wall' {...a11yProps(2)} />
          <Tab label='Memories' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <About />
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Articles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Social />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Memories />
      </TabPanel>
    </div>
  );
}
