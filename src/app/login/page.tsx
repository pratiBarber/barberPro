"use client";

import React, { useState } from 'react';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-black bg-[url('../../public/banner.jpg')] bg-center bg-[length:50%]"></div>
      <div className="flex-1 bg-[#D99C52] flex justify-center items-center">
        <div className="w-[300px] p-8 bg-[#D99C52]">
          <h2 className="mb-5 text-black text-7xl text-center">Login</h2>
          <p className="mb-5 text-black text-center">
            Não tem uma conta ainda? <a href="#" className="text-red-500 ">Registre-se</a>
          </p>
          <form className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-black">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="mb-4 p-2 h-[50px] text-lg bg-[#CFB28F] rounded placeholder-gray-900 text-black"
            />
            
            <label htmlFor="senha" className="mb-1 text-black">Senha</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                placeholder="Digite sua senha"
                className="p-2 w-full h-[50px] text-lg bg-[#CFB28F] rounded placeholder-gray-900 text-black"
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
