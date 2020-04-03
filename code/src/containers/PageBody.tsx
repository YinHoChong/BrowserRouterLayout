import * as React from "react";
import { motion } from "framer-motion";

export const PageBody = ({ children }) => {
  return <motion.div className="flex-1 h-full p-4">{children}</motion.div>;
};
