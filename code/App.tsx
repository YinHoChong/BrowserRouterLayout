import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

// Open Preview: Command + P
// Learn more: https://framer.com/api

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory,
  Link
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Screen } from "./src/containers/Screen";
import { PageHeader } from "./src/containers/PageHeader";
import { PageBody } from "./src/containers/PageBody";

const Home = () => {
  return (
    <Screen>
      <PageHeader>Home</PageHeader>
      <PageBody>
        <div>
          <Link to="/things">Go Forward</Link>
        </div>
      </PageBody>
    </Screen>
  );
};

const Things = () => {
  const history = useHistory();

  return (
    <Screen>
      <PageHeader onBack={history.goBack}>Things</PageHeader>
      <PageBody>
        <Link to="/things/1">Thing #1</Link>
      </PageBody>
    </Screen>
  );
};

const ThingDetail = () => {
  const history = useHistory();

  return (
    <Screen>
      <PageHeader onBack={history.goBack}>Thing #1</PageHeader>
      <PageBody />
    </Screen>
  );
};

const AnimationApp = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={false} initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/things" component={Things} />
        <Route exact path="/things/:id" component={ThingDetail} />
      </Switch>
    </AnimatePresence>
  );
};

export function App() {
  return (
    // <div className="app bg-white shadow-lg overflow-hidden relative">
    <div className="app">
      <Router>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Router>
    </div>
  );
}

// App.defaultProps = {
//     height: 128,
//     width: 240,
//     text: "Get started!",
//     tint: "#0099ff",
// }

// // Learn more: https://framer.com/api/property-controls/
// addPropertyControls(App, {
//     text: {
//         title: "Text",
//         type: ControlType.String,
//         defaultValue: "Hello Framer!",
//     },
//     tint: {
//         title: "Tint",
//         type: ControlType.Color,
//         defaultValue: "#0099ff",
//     },
// })
