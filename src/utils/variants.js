export const containerVariants = {
  // initial state
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      // complete this animation before the childrens animations can start
      when: "beforeChildren",
      // will stagger children 0.4 sec
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px #fff",
    boxShadow: "0px 0px 8px #fff",
    transition: {
      duration: 0.3,
      // yoyo --> like keyframes --> scale from default 1 to 1.1, repeated indefinetly
      yoyo: Infinity,
    },
  },
};

export const parentContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

export const backdropVariants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

export const modalVariants = {
  hidden: {y: "-100vh", opacity: 0},
  visible: {y: "200px", opacity: 1, transition: {delay: 0.5}},
};

export const svgVariants = {
  hidden: {rotate: -180},
  visible: {rotate: 0, transition: {duration: 1}},
};

export const pathVariants = {
  hidden: {opacity: 0, pathLength: 0},
  visible: {opacity: 1, pathLength: 1, transition: {duration: 2, ease: "easeInOut"}},
};

export const loaderVariants = {
  animationOne: {
    // elements in array [] --> keyframes
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    // elements in array [] --> keyframes
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
