import React from "react";

import { getEmailUrl } from "../utility";
import Link from "./Link";

export default ({ email, ...props }) => (
  <Link to={getEmailUrl(email)} {...props} />
);
