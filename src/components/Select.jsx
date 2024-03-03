import React, { forwardRef, useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm text-gray-600">
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-lg bg-white text-gray-800 outline-none focus:bg-gray-100 border border-gray-300 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} className="text-gray-800">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
