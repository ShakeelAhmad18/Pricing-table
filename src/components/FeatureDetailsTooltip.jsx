import React from "react";
import { motion } from "framer-motion";

const tooltipVariants = {
  initial: { opacity: 0, y: 10, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.1 } },
};

const FeatureDetailsTooltip = ({ isVisible, position, details, onClose }) => {
  if (!isVisible || !details) {
    return null;
  }

  const style = {
    position: "absolute",
    top: position.y + 20, // Adjust as needed
    left: position.x - 75, // Adjust for centering
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px 12px",
    zIndex: 50,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  return (
    <motion.div
      style={style}
      variants={tooltipVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={onClose} // Close on outside click (optional)
    >
      {details}
    </motion.div>
  );
};

export default FeatureDetailsTooltip;
