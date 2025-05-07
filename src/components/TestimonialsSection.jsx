import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "John Doe",
    text: "This pricing table component is fantastic! Easy to integrate and customize.",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", // Placeholder image
  },
  {
    name: "Jane Smith",
    text: "The annual billing discount is a great incentive. Highly recommended!",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", // Placeholder image
  },
  {
    name: "Jane Smith",
    text: "The annual billing discount is a great incentive. Highly recommended!",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", // Placeholder image
  },
];

const TestimonialsSection = () => (
  <section className="py-12 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-sm mt-2">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonialsData.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
          role="CEO"
          company="Acme Corp"
          rating={5}
        />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
