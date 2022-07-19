import React, { useEffect, useState } from "react";

import { getGitHubApiProfileUrl } from "../utility";

const DEFAULT_AVATAR_SIZE = 260;

export default ({ userName, size = DEFAULT_AVATAR_SIZE }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(getGitHubApiProfileUrl(userName))
      .then(response => response.json())
      .then(data => setImageUrl(data["avatar_url"]));
  }, [userName]);

  return (
    <img
      width={size}
      src={imageUrl}
      alt={`${userName}'s GitHub avatar`}
    />
  );
};
