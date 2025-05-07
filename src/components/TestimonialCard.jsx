import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Example icon

const TestimonialCard = ({ name, text, image, role, company, rating }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center md:items-start md:flex-row gap-4">
    {image && (
      <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner border-2 border-gray-100">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
    )}
    <div className="flex-1 text-center md:text-left">
      <div className="text-gray-600 italic mb-2 relative">
        <FaQuoteLeft className="absolute -left-4 -top-2 text-gray-300 text-lg" />
        "{text}"
      </div>
      <div className="font-semibold text-gray-900">{name}</div>
      {(role || company) && (
        <div className="text-gray-500 text-sm">
          {role && <span>{role}</span>}
          {role && company && <span>, </span>}
          {company && <span>{company}</span>}
        </div>
      )}
      {rating && (
        <div className="flex items-center justify-center md:justify-start mt-2">
          {Array.from({ length: rating }).map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.951h6.545L10 .5l2.868 6.451h6.545L14.7 11.545l1.176 6.545z" />
            </svg>
          ))}
          {Array.from({ length: 5 - rating }).map((_, index) => (
            <svg
              key={index + rating}
              className="w-4 h-4 text-gray-300 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.176-6.545L.587 6.951h6.545L10 .5l2.868 6.451h6.545L14.7 11.545l1.176 6.545z" />
            </svg>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default TestimonialCard;
