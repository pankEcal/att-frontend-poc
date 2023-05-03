import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { Header, Sidebar } from "components";

import appRoutes from "routes/app.jsx";

import { appStyle } from "variables/styles";

import image from "assets/img/road.png";
import logo from "assets/img/logo2.png";

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

function App(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainPanel = useRef(0);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return props.location.pathname !== "/maps";
  };

  const { classes, ...rest } = props;
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={appRoutes}
        // app logo
        logo={logo}
        // sidebar background image
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="red"
        {...rest}
      />
      <div className={classes.mainPanel} ref={useRef(mainPanel)}>
        <Header
          routes={appRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(appStyle, { withTheme: true })(App);
