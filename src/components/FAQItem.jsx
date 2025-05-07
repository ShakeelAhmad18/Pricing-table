import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";



const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <motion.div className="rounded-md shadow-sm overflow-hidden mb-2">
      <button
        className="flex items-center justify-between w-full p-4 font-semibold text-left bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <FaChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <FaChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-gray-50 text-gray-700"
            id={`faq-content-${question.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;