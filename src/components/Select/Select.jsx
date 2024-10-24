import React, { useState } from "react";

export const Select = ({ options, errorMessage }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full my-3">
      <h3 className="text-gray-400">Qual o Cargo Pretendido ?</h3>
      <select
        className="w-full bg-transparent"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {options.map((option, index) => (
          <option className="bg-blue-900" key={index} value={option}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <p className="text-red-600 text-sm mt-2 ml-3">{errorMessage.message}</p>
      )}
    </div>
  );
};
