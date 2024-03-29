import React from "react";
import {motion} from "framer-motion";
import {svgVariants, pathVariants} from "../utils/variants";

const Header = () => {
  return (
    <motion.header initial={{y: "-100vh"}} animate={{y: 0}} transition={{delay: 0.5}}>
      <motion.div
        className="logo"
        drag
        dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
        dragElastic={1}
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>{" "}
      </motion.div>{" "}
      <motion.div
        className="title"
        initial={{y: -250}}
        animate={{y: -10}}
        transition={{delay: 0.5, type: "spring", stiffness: 150}}
      >
        <h1> Pizza Joint </h1>{" "}
      </motion.div>{" "}
    </motion.header>
  );
};

export default Header;
