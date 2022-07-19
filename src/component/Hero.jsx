import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

import { scrollImage } from "../asset/image";

const Root = styled.header({
  height: "100vh",
  backgroundColor: "black",

  "@media (max-width: 490px), (max-height: 920px)": {
    height: "100%",

    paddingBottom: "80px",
    paddingTop: "80px"
  }
});

const ContentArea = styled.div({
  height: "100%",

  display: "flex",
  alignItems: "center"
});

const ScrollArea = styled.div({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,

  display: "flex",
  justifyContent: "center",
  paddingBottom: "10px",

  "@media (max-width: 490px), (max-height: 920px)": {
    display: "none"
  }
});

const ScrollIndicator = styled.a(
  {
    transition: "opacity 0.5s ease-in",

    "& > object": {
      pointerEvents: "none"
    }
  },
  ({ visible }) => ({
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? "inherit" : "none"
  })
);

export default ({ children, ...props }) => {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const scrollIndicator = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.scrollingElement.scrollTop === 0) {
        setScrollIndicatorVisible(true);
      } else {
        setScrollIndicatorVisible(false);
      }
    });

    if (!scrollIndicator.current) {
      return;
    }

    scrollIndicator.current.addEventListener("click", () => {
      const mainElement = document.querySelector("main");

      if (!mainElement) {
        return false;
      }

      window.scroll({
        top: mainElement.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
      });

      return false;
    });
  }, []);

  return (
    <Root {...props}>
      <ContentArea>
        {children}
      </ContentArea>
      <ScrollArea>
        <ScrollIndicator
          ref={scrollIndicator}
          visible={scrollIndicatorVisible}
          href="#"
        >
          <object type="image/svg+xml" data={scrollImage} />
        </ScrollIndicator>
      </ScrollArea>
    </Root>
  );
};
