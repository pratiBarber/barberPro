import React, { useState } from 'react';

interface RegisterFormProps {
  onToggle: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {
  const [tipoUsuario, setTipoUsuario] = useState<string>('cliente');
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleCheckboxChange = (tipo: string) => {
    setTipoUsuario(tipo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    // Definir o papel do usuário conforme o tipo selecionado
    const role = tipoUsuario === 'cliente' ? 'CLIENT' : 'PROFESSIONAL';

    // Corpo da requisição conforme o esperado pela API
    const body = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      dateOfBirth: formData.dateOfBirth,
      address: formData.address,
      email: formData.email,
      password: formData.password,
      role, // CLIENT ou PROFESSIONAL
    };

    // Envio da requisição POST
    console.log(body);
    fetch('https://s9efz9-ip-128-201-121-117.tunnelmole.net/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Sucesso:', data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <div className="w-full max-w-md p-4 bg-[#D99C52]">
      <h2 className="mb-4 text-black text-xl md:text-3xl text-center">Registrar-se</h2>
      <p className="mt-2 mb-4 text-center text-black text-xs md:text-sm">
        Já possui conta?{' '}
        <a href="#" onClick={onToggle} className="text-red-500">
          Já possuo conta
        </a>
      </p>

      <form className="forms flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-1 text-black text-xs md:text-sm">Você é:</label>
        <div className="flex justify-between mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={tipoUsuario === 'cliente'}
              onChange={() => handleCheckboxChange('cliente')}
              className="hidden"
            />
            <span
              className={`cursor-pointer px-4 py-2 rounded-full ${tipoUsuario === 'cliente' ? 'bg-black text-white' : 'bg-[#CFB28F] text-black'}`}
            >
              Cliente
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={tipoUsuario === 'profissional'}
              onChange={() => handleCheckboxChange('profissional')}
              className="hidden"
            />
            <span
              className={`cursor-pointer px-4 py-2 rounded-full ${tipoUsuario === 'profissional' ? 'bg-black text-white' : 'bg-[#CFB28F] text-black'}`}
            >
              Profissional
            </span>
          </label>
        </div>

        <label htmlFor="name" className="mb-1 text-black text-xs md:text-sm">Nome Completo</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome completo"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="phoneNumber" className="mb-1 text-black text-xs md:text-sm">Telefone</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Digite seu telefone"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="dateOfBirth" className="mb-1 text-black text-xs md:text-sm">Data de Nascimento</label>
        <input
          type="date"
          id="dateOfBirth"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />

        <label htmlFor="address" className="mb-1 text-black text-xs md:text-sm">Endereço</label>
        <input
          type="text"
          id="address"
          placeholder="Digite seu endereço"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.address}
          onChange={handleInputChange}
        />

        <label htmlFor="email" className="mb-1 text-black text-xs md:text-sm">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password" className="mb-1 text-black text-xs md:text-sm">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="confirmPassword" className="mb-1 text-black text-xs md:text-sm">Confirme a Senha</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirme sua senha"
          className="inputss mb-2 p-2 h-[35px] text-xs md:text-sm bg-[#CFB28F] rounded placeholder-gray-900 text-black"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="buttons p-2 bg-black text-white text-xs md:text-sm rounded hover:bg-gray-800"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
