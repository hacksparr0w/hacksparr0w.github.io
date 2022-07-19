import React from "react";

import { getGitHubProfileUrl } from "../utility";
import Link from "./Link";

export default ({ userName, ...props }) => (
  <Link to={getGitHubProfileUrl(userName)} {...props} />
);
