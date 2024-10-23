import React from "react";

export const Input = ({ type, placeholder, register, errorMessage, name }) => {
  return (
    <>
      <div className="w-full h-18 text-slate-100 rounded-3 overflow-hidden py-3">
        <input
          className="w-full h-11 bg-transparent border-b-2 border-gray-600 border-spacing-0 outline-none"
          type={type}
          placeholder={placeholder}
          name={name}
          {...register(name)}
         
        />
         {errorMessage && <p className="text-red-600 text-sm mt-2 ml-3">{errorMessage.message}</p>}

      </div>
      
    </>
  );
};
