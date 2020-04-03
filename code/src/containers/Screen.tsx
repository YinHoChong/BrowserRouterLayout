import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useHistory } from "react-router-dom";

const spring = {
  type: "spring",
  damping: 100,
  stiffness: 200
};

export const Screen = ({ children }) => {
  const constraintsRef = React.useRef(null);

  const { action, goBack } = useHistory();
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  const handleDragEnd = (_, info) => {
    // hack
    if (info.point.x > 30) {
      goBack();
    }
  };

  const initialAnim = {
    x: action === "POP" ? "-100%" : "100%",
    opacity: 0
  };

  const exitAnim = {
    x: action === "POP" ? "100%" : "-100%",
    opacity: 0
  };

  return (
    <motion.div style={{ opacity }} className="pin" ref={constraintsRef}>
      <motion.div
        className="pin"
        drag="x"
        style={{ x }}
        dragConstraints={constraintsRef}
        onDragEnd={handleDragEnd}
        transition={spring}
        animate={{
          x: 0,
          opacity: 1
        }}
        initial={initialAnim}
        exit={exitAnim}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
