'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

interface Service {
    serviceTypeId: number;
    title: string;
    description: string;
    price: number;
  }
  
  interface Barbeiro {
    id: number;
    name: string;
    email: string;
    address: string;
    phoneNumber: string;
    dateOfBirth: string;
    services: Service[];
  }
  

export default function Select() {
  const [barbeiros, setBarbeiros] = useState([]);
  const [nome, setNome] = useState('');
  const [servico, setServico] = useState('');

  const fetchBarbeiros = async () => {
    try {
      const token = localStorage.getItem('token'); // Substitua 'token' pela chave real do localStorage
  
      const response = await fetch('http://localhost:8080/api/professional', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao buscar barbeiros: ${response.statusText}`);
      }
  
      const data = await response.json();
      setBarbeiros(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    fetchBarbeiros();
  }, []);

  const barbeirosFiltrados = barbeiros.filter((barbeiro) => {
    const possuiServico = (barbeiro as Barbeiro).services.some((s) =>
      s.title.toLowerCase().includes(servico.toLowerCase())
    );

    return (
      (nome === '' || (barbeiro as Barbeiro).name.toLowerCase().includes(nome.toLowerCase())) &&
      (servico === '' || possuiServico)
    );
  });

  return (
    <main className="flex bg-cover bg-repeat-y bg-center relative bg-black/40" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-[1218px] px-[10px] box-border">
        <header className="flex justify-center gap-[10px] p-[10px] max-w-full flex-wrap sm:flex-nowrap my-[20px]">
          <input
            type="text"
            placeholder="Nome"
            className="bg-[#D99C52] text-black rounded-[5px] max-h-[71px] w-full sm:max-w-[218px] p-[20px] text-center"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <select
            className="bg-[#D99C52] text-black rounded-[5px] max-h-[71px] w-full sm:max-w-[218px] p-[20px] text-center"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
          >
            <option value="">Serviços</option>
            <option value="Barba">Barba</option>
            <option value="Cabelo">Cabelo</option>
            <option value="Sobrancelha">Sobrancelha</option>
          </select>
          <input type="text" placeholder="CEP" className="bg-[#D99C52] text-black rounded-[5px] max-h-[71px] w-full sm:max-w-[218px] p-[20px] text-center" />
          <input type="text" placeholder="Cidade" className="bg-[#D99C52] text-black rounded-[5px] max-h-[71px] w-full sm:max-w-[218px] p-[20px] text-center" />
          <input type="text" placeholder="UF" className="bg-[#D99C52] text-black rounded-[5px] max-h-[71px] w-full sm:max-w-[98px] p-[20px] text-center" />
          <button className="p-[10px] bg-[#D99C52] border border-white rounded-[5px] w-full sm:max-w-[68px] max-h-[71px] cursor-pointer">
            <img src="./lupa.png" alt="Pesquisar" />
          </button>
        </header>

        <div className="w-full max-w-[1118px] bg-[#d99c52bd] rounded-[10px] flex flex-col items-center p-[10px] h-[550px] max-h-[550px] overflow-y-auto">
          <div className="flex flex-col w-full max-h-[500px] overflow-y-auto scrollbar-hidden scroll-snap-y">
            {barbeirosFiltrados.map((barbeiro, index) => (
              <div className="w-full max-w-[1067px] flex flex-col sm:flex-row bg-[#D99C52] rounded-[20px] my-[10px] p-[16px] box-border scroll-snap-start border-b border-gray-300" key={index}>
                <div className="flex flex-col items-center text-black p-[10px] w-full sm:w-auto">
                  <img src='./iconPessoa2.png' className="h-[120px] w-[150px] rounded-full object-cover" alt={(barbeiro as Barbeiro).name} />
                  <h1 className="font-bold text-center">{(barbeiro as Barbeiro).name}</h1>
                </div>
                <div className="hidden sm:flex w-[1px] h-[90%] bg-white mx-auto"></div>
                <div className="flex flex-col items-center text-black p-[10px] w-full">
                  <p><strong>Serviços:</strong></p>
                  {/* {(barbeiro as Barbeiro).services.map((service, i) => (
                    <p key={i}>{service}</p>
                  ))} */}
                </div>
                <div className="hidden sm:flex w-[1px] h-[90%] bg-white mx-auto"></div>
                <div className="flex flex-col items-center text-black p-[10px] w-full">
                  <p><strong>Descrição:</strong></p>
                  {/* <p>{(barbeiro as Barbeiro).services[0].description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}