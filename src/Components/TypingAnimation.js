import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timer;
    let index = 0;
    const addChar = () => {
      setDisplayText((prevText) => prevText + text[index]);
      index++;
      if (index + 1 < text.length) {
        timer = setTimeout(addChar, speed);
      }
    };
    timer = setTimeout(addChar, speed);

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default TypingAnimation;
