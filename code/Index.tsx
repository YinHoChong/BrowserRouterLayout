import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";
import "./src/css/Styles.css";

import { App } from "./App";

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Index() {
  return <App />;
}

// Index.defaultProps = {
//   height: 128,
//   width: 240,
//   text: "Get started!",
//   tint: "#0099ff"
// };

// // Learn more: https://framer.com/api/property-controls/
// addPropertyControls(Index, {
//   text: {
//     title: "Text",
//     type: ControlType.String,
//     defaultValue: "Hello Framer!"
//   },
//   tint: {
//     title: "Tint",
//     type: ControlType.Color,
//     defaultValue: "#0099ff"
//   }
// });
