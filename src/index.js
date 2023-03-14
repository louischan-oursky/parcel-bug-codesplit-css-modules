import React, { lazy } from "react";

const ScreenA = lazy(async () => import("./ScreenA"));
const ScreenB = lazy(async () => import("./ScreenB"));

import { render } from "react-dom";

render(
  <div>
    <ScreenA />
    <ScreenB />
  </div>,
  document.getElementById("react-app-root")
);
