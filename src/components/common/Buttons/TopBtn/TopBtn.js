import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import classes from "./TopBtn.module.scss";

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop} className={classes.arrow_icon_container}>
          <RiArrowUpSLine className={classes.arrow_icon} />
        </div>
      )}
    </div>
  );
};
export default TopBtn;
