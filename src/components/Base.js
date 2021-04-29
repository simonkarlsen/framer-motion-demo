import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {containerVariants, nextVariants, buttonVariants} from "../utils/variants";

const Base = ({addBase, pizza}) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      // looks for hidden and visible property in containerVariants:
      initial="hidden"
      animate="visible"
      exit="exit"
      // transition is embedded automatically when using the variant
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{scale: 1.3, originX: 0, color: "#f8e112"}}
              transition={{type: "spring", stiffness: 300}}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          // dont need to specify initial or animate since framer motion automatically
          // looks uses the same properties as the parent div.
          // The parent div uses initial="hidden" and animate="visible"
          // Since both variants uses hidden and visible, it will be applied to motion
          // elements children with variants. Saves some code.
          // initial="hidden"
          // animate="visible"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover={"hover"}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
