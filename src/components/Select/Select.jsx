

export const Select = ({ options, errorMessage, register}) => {

  return (
    <div className="w-full my-3">
      <h3 className="text-gray-400">Qual o Cargo Pretendido ?</h3>
      <select
        className="w-full bg-transparent"
        {...register("cargo")}
      >
        <option value="">Selecione um cargo</option>
        {options.map((option, index) => (
          <option className="bg-blue-900" key={index} value={option.value}>
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
