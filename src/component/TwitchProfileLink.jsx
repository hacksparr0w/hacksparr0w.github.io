import React from "react";

import { getTwitchProfileUrl } from "../utility";
import Link from "./Link";

export default ({ userName, ...props }) => (
  <Link to={getTwitchProfileUrl(userName)} {...props} />
);
