import React from "react";

import { getInstagramProfileUrl } from "../utility";
import Link from "./Link";

export default ({ userName, ...props }) => (
  <Link to={getInstagramProfileUrl(userName)} {...props} />
);
