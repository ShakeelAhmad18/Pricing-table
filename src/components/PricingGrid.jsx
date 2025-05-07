import React from 'react'
import { FaCheck, FaCrown, FaQuestionCircle, FaRegHandshake, FaRocket, FaTools } from 'react-icons/fa'

const PricingGrid = ({ plansConfig, billing, formatPrice ,selected}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plansConfig[billing].map((plan, i) => (
        <article
          key={plan.name}
          className={`relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow ${
            plan.popular ? "ring-2 ring-purple-500" : ""
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-2 right-4 bg-purple-500 text-white px-3 py-0.5 text-xs uppercase tracking-wide rounded-full">
              Most Popular
            </div>
          )}
          <header className="flex items-center mb-4">
            {i === 0 && (
              <FaTools className="h-6 w-6 text-blue-500 mr-2" aria-hidden />
            )}
            {i === 1 && (
              <FaRocket className="h-6 w-6 text-purple-500 mr-2" aria-hidden />
            )}
            {i === 2 && (
              <FaCrown className="h-6 w-6 text-yellow-500 mr-2" aria-hidden />
            )}
            <h3 className="text-2xl font-semibold text-gray-900">
              {plan.name}
            </h3>
          </header>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              {formatPrice(plan.price)}
            </span>
            <span className="text-sm text-gray-500">/{billing}</span>
            <p className="mt-1 text-sm text-gray-600">{plan.bestFor}</p>
          </div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feat) => (
              <li key={feat} className="flex items-start">
                <FaCheck className="mt-1 w-5 h-5 text-green-500 flex-shrink-0" />
                <button
                  aria-label={`Learn more about ${feat}`}
                  onClick={() =>
                    alert(featureDetails[feat] || "Details coming soon")
                  }
                  className="ml-2 text-gray-700 hover:text-purple-500 flex items-center space-x-1"
                >
                  <span>{feat}</span>
                  <FaQuestionCircle className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSelected(plan.name)}
            className={`w-full py-3 font-semibold rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-500
                    ${
                      plan.popular
                        ? "bg-purple-500 text-white hover:bg-purple-600"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }
                    ${selected === plan.name ? "ring-2 ring-purple-500" : ""}
                  `}
          >
            {selected === plan.name ? "Selected" : "Choose Plan"}
          </button>

          {/* SLA for Enterprise only */}
          {plan.name === "Enterprise" && (
            <footer className="mt-4 border-t pt-4 text-sm text-gray-600 flex items-center">
              <FaRegHandshake className="w-5 h-5 text-green-500 mr-2" />
              Priority SLA & Support
            </footer>
          )}
        </article>
      ))}
    </div>
  );
};

export default PricingGrid
