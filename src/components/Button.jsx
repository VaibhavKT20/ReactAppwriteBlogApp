import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:bg-gray-800 hover:text-gray-200 transition duration-300 ease-in-out`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
