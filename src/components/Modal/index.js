import React from "react";
import {Link} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import {backdropVariants, modalVariants} from "../../utils/variants";

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modalVariants}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
