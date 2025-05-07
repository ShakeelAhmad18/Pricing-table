import React from 'react'
import { FaDollarSign } from 'react-icons/fa';
import { motion } from "framer-motion";


const Header = ({ setBilling, setCurrency, billing, currency }) => {
  return (
    <header className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-gray-900 mb-4"
      >
        Flexible Pricing Plans
      </motion.h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Choose the perfect plan for your business needs. Scale effortlessly as
        your team grows.
      </p>
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="font-medium">Monthly</span>
          <button
            aria-label="Toggle Billing Cycle"
            onClick={() =>
              setBilling((b) => (b === "monthly" ? "annual" : "monthly"))
            }
            className="relative w-12 h-6 bg-gray-300 rounded-full focus:ring-2 focus:ring-purple-500"
          >
            <motion.span
              layout
              className="block w-5 h-5 bg-white rounded-full shadow"
              initial={false}
              animate={{ x: billing === "annual" ? 24 : 0 }}
            />
          </button>
          <span className="font-medium">Annual</span>
          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
            Save 20%
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaDollarSign />
          <select
            value={currency}
            aria-label="Currency Selector"
            onChange={(e) => setCurrency(e.target.value)}
            className="p-1 border rounded-md"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header
