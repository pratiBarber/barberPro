"use client"; // Certifique-se de que o arquivo é tratado como um componente do Next.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando useRouter

interface LoginFormProps {
  onToggle: () => void;  // Callback para alternar entre formulários
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const router = useRouter(); // Usando o useRouter

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }

      const data = await response.json();

      // Aqui você pode salvar o token, por exemplo, no localStorage
      localStorage.setItem('token', data.token); // Supondo que o token seja retornado

      // Redireciona para a página do usuário
      router.push('/user');
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-[#D99C52]">
      <h2 className="mb-4 text-black text-3xl md:text-6xl text-center">Login</h2>
      <p className="pe mb-4 text-black text-center text-sm md:text-base">
        Não tem uma conta ainda?{" "}
        <a href="#" onClick={onToggle} className="text-red-500">
          Registre-se
        </a>
      </p>
      <form className="forms flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email" className="mb-1 text-black text-sm md:text-base">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualizando o estado
        />

        <label htmlFor="senha" className="mb-1 text-black text-sm md:text-base">Senha</label>
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            id="senha"
            placeholder="Digite sua senha"
            className="inputss p-2 w-full h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
            value={password}
            onChange={(e) => setSenha(e.target.value)} // Atualizando o estado
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
          className="buttons p-2 bg-black text-white text-sm md:text-base rounded hover:bg-gray-800"
        >
          Fazer Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
