import React, { useState } from "react";
import {
  FaCheck
} from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Header from "./Header";
import PricingGrid from "./PricingGrid";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";

const plansConfig = {
  monthly: [
    {
      name: "Starter",
      price: 49,
      features: [
        "Up to 5 projects",
        "Basic Analytics",
        "5GB Storage",
        "Community Support",
        "API Access",
      ],
      bestFor: "Small teams & startups",
    },
    {
      name: "Professional",
      price: 149,
      popular: true,
      features: [
        "Up to 20 projects",
        "Advanced Analytics",
        "20GB Storage",
        "Priority Support",
        "Custom Domains",
        "Team Collaboration",
        "SSO Integration",
      ],
      bestFor: "Growing businesses",
    },
    {
      name: "Enterprise",
      price: 499,
      features: [
        "Unlimited projects",
        "Premium Analytics",
        "100GB Storage",
        "24/7 Support",
        "Custom SLAs",
        "Dedicated Success Manager",
        "Audit Logs",
        "SAML Authentication",
      ],
      bestFor: "Large organizations",
    },
  ],
  annual: [], // filled below
};
// calculate annual pricing (2 months free + 20% off)
plansConfig.annual = plansConfig.monthly.map((p) => ({
  ...p,
  price: Math.round(p.price * 10 * 0.8),
}));

const featureDetails = {
  "API Access": "Access our full-featured REST API with 1,000 requests/month.",
  "SSO Integration": "Secure single sign-on via SAML or OAuth.",
  // add more detail mappings here...
};

export default function PricingTable() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");
  const [selected, setSelected] = useState(null);
  const [comparing, setComparing] = useState(false);

  const formatPrice = (amount) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
      amount
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4">
      {/* Header & Toggles */}
      <Header
        setBilling={setBilling}
        setCurrency={setCurrency}
        billing={billing}
        currency={currency}
      />
      {/* Pricing Grid */}
      <PricingGrid
        plansConfig={plansConfig}
        billing={billing}
        formatPrice={formatPrice}
        selected={selected}
      />
      {/* Compare Plans CTA */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setComparing(true)}
          className="inline-flex items-center space-x-2 border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-50 transition"
        >
          Compare Plans
        </button>
      </div>

      {/* Scrollable Comparison Modal */}
      <Dialog
        open={comparing}
        onClose={() => setComparing(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <DialogPanel
          className="
            bg-white rounded-xl p-6
            max-w-3xl w-full
            max-h-[80vh] overflow-y-auto
          "
        >
          <DialogTitle className="text-2xl font-bold mb-4">
            Plan Comparison
          </DialogTitle>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th></th>
                  {plansConfig[billing].map((plan) => (
                    <th key={plan.name} className="p-2">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Price</td>
                  {plansConfig[billing].map((plan) => (
                    <td key={plan.name} className="p-2 font-semibold">
                      {formatPrice(plan.price)}/{billing}
                    </td>
                  ))}
                </tr>
                {Array.from(
                  new Set(plansConfig[billing].flatMap((p) => p.features))
                ).map((feat) => (
                  <tr key={feat} className="border-t">
                    <td className="p-2">{feat}</td>
                    {plansConfig[billing].map((plan) => (
                      <td key={plan.name} className="p-2 text-center">
                        {plan.features.includes(feat) ? (
                          <FaCheck className="inline w-4 h-4 text-green-500" />
                        ) : (
                          "—"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={() => setComparing(false)}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </Dialog>
      <TestimonialsSection />
      <FAQSection />
    </section>
  );
}
