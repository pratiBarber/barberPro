import React, { useState } from 'react';

interface LoginFormProps {
  onToggle: () => void;  // Callback para alternar entre formulários
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <form className="forms flex flex-col">
        <label htmlFor="email" className="mb-1 text-black text-sm md:text-base">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <label htmlFor="senha" className="mb-1 text-black text-sm md:text-base">Senha</label>
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            id="senha"
            placeholder="Digite sua senha"
            className="inputss p-2 w-full h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
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
