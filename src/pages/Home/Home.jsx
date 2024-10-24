import React, { useEffect, useState } from "react";

export const Home = () => {
  const [cadastro, setCadastro] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cadastro")) || [];
    setCadastro(data);
  }, []);

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center text-yellow-400">Seja Bem Vindo ao Frontend Fusion!!!</h1>

      <h3 className="text-2xl">dados do cadastro</h3>

      <ul className="flex flex-col gap-5 text-md mt-7 font-bold">
        
        <li className="border-2 rounded-full p-3 bg-slate-950">
          <span className="text-gray-600">Nome: </span> {cadastro.fullname}
        </li>
  
        <li className="border-2 rounded-full p-3 bg-slate-950">
          <span className="text-gray-600">Email: </span> {cadastro.email}
        </li>
        <li className="border-2 rounded-full p-3 bg-slate-950">
          <span className="text-gray-600">Telefone: </span> {cadastro.telefone}
        </li>
        <li className="border-2 rounded-full p-3 bg-slate-950">
          <span className="text-gray-600">Cargo: </span> {cadastro.cargo}
        </li>
        <li className="border-2 rounded-full p-3 bg-slate-950">
          <span className="text-gray-600 text-wrap">LinkedIn: </span>{" "}
          {!cadastro.linkedin ? "Não Informado" : cadastro.linkedin}
        </li>
        <li className="border-2 rounded-full p-3 bg-slate-950">
          <span className="text-gray-600">Github: </span>{" "}
          {!cadastro.github ? "Não Informado" : cadastro.github}
        </li>
      </ul>
    </div>
  );
};
