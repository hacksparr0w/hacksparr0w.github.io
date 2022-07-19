import React from "react";

import { getTwitterProfileUrl } from "../utility";
import Link from "./Link";

export default ({ userName, ...props }) => (
  <Link to={getTwitterProfileUrl(userName)} {...props} />
);
