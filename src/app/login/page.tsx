"use client";

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      {/* Esquerda: com padrão de fundo */}
      <div className="flex-1 bg-black bg-[url('../../public/banner.png')] bg-repeat bg-cover"></div>
      
      {/* Direita: Formulário de Login */}
      <div className="flex-1 bg-[#D99C52] flex justify-center items-center">
        <div className="w-[300px] bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-5 text-black text-7xl">Login</h2>
          <p className="mb-5 text-black">
            Não tem uma conta ainda? <a href="#" className="text-red-500">Registre-se</a>
          </p>
          <form className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-black">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="mb-4 p-2 text-lg border border-gray-300 rounded"
            />
            
            <label htmlFor="senha" className="mb-1 text-black">Senha</label>
            <div className="flex items-center mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                placeholder="Digite sua senha"
                className="flex-1 p-2 text-lg border border-gray-300 rounded"
              />
              <button
                type="button"
                className="ml-2 cursor-pointer text-gray-600"
                onClick={togglePasswordVisibility}
              >
                👁️
              </button>
            </div>
            
            <button
              type="submit"
              className="p-2 bg-black text-white text-lg rounded hover:bg-gray-800"
            >
              Fazer Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
