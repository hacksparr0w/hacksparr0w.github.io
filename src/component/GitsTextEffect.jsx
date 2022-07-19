import React, { useEffect, useRef, useState } from "react";

import { chooseRandomElement, chooseRandomElements } from "../random";
import { removeElements, sleep } from "../utility";

const ALPHABET = (
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*" +
  "()_-+={[}]:;\"'|\\<,>.?/"
);

export default ({ component: Component = "p", children }) => {
  const [text, setText] = useState("");
  const [finished, setFinished] = useState(true);
  const rootRef = useRef();

  useEffect(() => {
    setFinished(false);

    (async () => {
      let step = 0;
      let alphabet = ALPHABET.split("");
      let originalText = rootRef.current.innerText;
      let currentText = ""

      for (;;) {
        if (currentText === "") {
          currentText = originalText.split("")
            .map(x => x === " " ? " " : chooseRandomElement(alphabet))
            .join("");
        } else {
          const difference = originalText.split("")
            .filter((x, i) => x !== currentText.charAt(i));

          alphabet = removeElements(
            alphabet,
            chooseRandomElements(
              alphabet.filter(x => !difference.includes(x)),
              step
            )
          );

          currentText = currentText.split("")
            .map((x, i) => (
              x === originalText.charAt(i) ? x : chooseRandomElement(alphabet)
            ))
            .join("");
        }

        if (currentText === originalText) {
          setFinished(true);
          return;
        }

        step += 1;
        setText(currentText);
        await sleep(60);
      }
    })();
  }, [children]);

  return (
    <Component ref={rootRef}>
      {finished ? children : text}
    </Component>
  )
};
