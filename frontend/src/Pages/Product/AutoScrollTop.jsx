import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true);
    } else if (scrolled <= 150) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      onClick={scrollToTop}
      style={{
        padding: "10px",
        fontSize: "26px",
        width: "30px",
        height: "45px",
        backgroundColor: "#ff6f61",
        display: visible ? "inline" : "none",
        position: "absolute",
        top: "85%",
        left: "95%",
        position: "fixed",
        color: "#fff",
        textAlign: "center",
      }}
    >
      ^
    </Button>
  );
};

export default ScrollButton;
