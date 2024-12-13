import React from "react";

export const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  required = false,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className={`rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${className}`}
      {...props}
    />
  );
};
