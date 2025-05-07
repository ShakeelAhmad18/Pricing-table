import { useState } from "react";
import FAQItem from "./FAQItem";


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Basic accordion behavior (optional)
  };

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can easily upgrade or downgrade your plan at any time through your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Absolutely! We offer a 30-day money-back guarantee if you're not completely satisfied with our service.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes, we offer a significant discount (20% off) when you choose our annual billing option.",
    },
    // Add more FAQ items
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-sm mt-2">  
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
