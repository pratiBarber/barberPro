"use client";
import "./estilo.css";

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-pai flex flex-col md:flex-row h-screen">
      {/* Imagem de fundo do lado esquerdo */}
      <div className="login-banner md:flex-1 bg-black bg-[url('../../public/banner.jpg')] bg-center bg-cover md:bg-[length:50%] h-64 md:h-auto"></div>

      {/* Seção de login */}
      <div className="login-form md:flex-1 bg-[#D99C52] flex justify-center items-center">
        <div className="w-full max-w-md p-8 bg-[#D99C52]">
          <h2 className="mb-5 text-black text-4xl md:text-7xl text-center">Login</h2>
          <p className="pe mb-5 text-black text-center text-lg md:text-base">
            Não tem uma conta ainda? <a href="#" className="text-red-500">Registre-se</a>
          </p>
          <form className="forms flex flex-col">
            {/* Input de email */}
            <label htmlFor="email" className="mb-1 text-black text-lg">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="inputss mb-4 p-2 h-[50px] text-lg bg-[#CFB28F] rounded placeholder-gray-900 text-black"
            />
            
            {/* Input de senha */}
            <label htmlFor="senha" className=" inputs mb-1 text-black text-lg">Senha</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                placeholder="Digite sua senha"
                className="inputss p-2 w-full h-[50px] text-lg bg-[#CFB28F] rounded placeholder-gray-900 text-black"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>

            {/* Botão de login */}
            <button
              type="submit"
              className="buttons p-2 bg-black text-white text-lg rounded hover:bg-gray-800"
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
