import React from "react";

export const Button = ({ title, onClick, type }) => {
  return (
    <button
      className="w-full h-12 rounded-full hover:bg-green-700 bg-green-500 text-lg font-semibold p-2"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};
