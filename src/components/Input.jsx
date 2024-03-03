import React, { useId } from "react";

const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className="mt-4">
        {label && (
          <label
            className="block mb-1 text-sm font-medium text-gray-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`w-full px-4 py-2 rounded-md border border-gray-300 bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
          {...props}
          ref={ref}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
