import React from "react";

function Container({ children }) {
  return (
    <div className="w-full mx-auto px-4 max-w-10xl bg-gray-900 text-gray-500 py-8">
      {children}
    </div>
  );
}

export default Container;
