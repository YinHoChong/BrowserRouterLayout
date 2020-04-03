import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./src/containers/Gallery";
import { SingleImage } from "./src/containers/SingleImage";

import "./src/css/styles.css";

// Open Preview: Command + P
// Learn more: https://framer.com/api

const AnimationApp = () => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Gallery} />
        <Route exact path="/image/:id" component={SingleImage} />
      </Switch>
    </AnimatePresence>
  );
};

export function AppRouter(props) {
  return (
    <Router>
      <Route render={({ location }) => <AnimationApp />} />
    </Router>
  );
}

AppRouter.defaultProps = {
  height: 128,
  width: 240,
  text: "Get started!",
  tint: "#0099ff"
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(AppRouter, {
  text: {
    title: "Text",
    type: ControlType.String,
    defaultValue: "Hello Framer!"
  },
  tint: {
    title: "Tint",
    type: ControlType.Color,
    defaultValue: "#0099ff"
  }
});
