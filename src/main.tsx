import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutexProvider from "./libs/Routex/components/RoutexProvider/RoutexProvider";
import { RoutexType } from "./libs/Routex/types";
import Works from "./pages/Works/Works";

const routex: RoutexType[] = [
  {
    path: "",
    isIndex: true,
    component: <Works />,
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RoutexProvider provider={routex} />
  </React.StrictMode>,
);
