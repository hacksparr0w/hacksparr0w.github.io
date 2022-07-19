import React from "react";

import BlogPostListItem from "./BlogPostListItem";

export default ({ posts, ...rest }) => (
  <div {...rest}>
    {posts.map(post => {
      const { documentFileUrl: key } = post;

      return (
        <BlogPostListItem key={key} post={post} />
      );
    })}
  </div>
);
