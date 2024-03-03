import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div
      style={{
        width,
        height: "40px",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textTransform: "uppercase",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        letterSpacing: "1px",
        padding: "5px",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      BV
    </div>
  );
};

export default Logo;
