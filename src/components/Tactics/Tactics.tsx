import { mc } from "src/utility/functions";
import React from "react";
import classes from "./Tactics.module.css";
import TacticsGrid from "../TacticsGrid";

const Tactics: React.FC = () => (
  <div
    className={mc(
      "position-relative d-flex flex-column h-100",
      classes.container
    )}
  >
    {/* YOUR COMPONENT HERE */}
    <TacticsGrid />
  </div>
);

export default Tactics;
