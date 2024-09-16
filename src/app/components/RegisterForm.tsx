import React from 'react';

interface RegisterFormProps {
  onToggle: () => void;  // Callback para alternar entre formulários
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {
  return (
    <div className="w-full max-w-md p-6 bg-[#D99C52]">
      <h2 className="mb-4 text-black text-2xl md:text-4xl text-center">Registrar-se</h2>
      <p className="mt-4 mb-4 text-center text-black text-sm md:text-base">
        Já possui conta?{" "}
        <a href="#" onClick={onToggle} className="text-red-500">
          Já possuo conta
        </a>
      </p>
      <form className="forms flex flex-col">
        <label htmlFor="nome" className="mb-1 text-black text-sm md:text-base">Nome Completo</label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome completo"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <label htmlFor="telefone" className="mb-1 text-black text-sm md:text-base">Telefone</label>
        <input
          type="text"
          id="telefone"
          placeholder="Digite seu telefone"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <label htmlFor="data-nascimento" className="mb-1 text-black text-sm md:text-base">Data de Nascimento</label>
        <input
          type="date"
          id="data-nascimento"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <label htmlFor="email" className="mb-1 text-black text-sm md:text-base">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <label htmlFor="senha" className="mb-1 text-black text-sm md:text-base">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <label htmlFor="confirm-senha" className="mb-1 text-black text-sm md:text-base">Confirme a Senha</label>
        <input
          type="password"
          id="confirm-senha"
          placeholder="Confirme sua senha"
          className="inputss mb-3 p-2 h-[40px] text-sm md:text-base bg-[#CFB28F] rounded placeholder-gray-900 text-black"
        />

        <button
          type="submit"
          className="buttons p-2 bg-black text-white text-sm md:text-base rounded hover:bg-gray-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
