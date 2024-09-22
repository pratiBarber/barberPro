import React from 'react';
import Link from 'next/link';
import MeusAgendamentos from '../components/MeusAgendamentos';

const AgendamentosCliente = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-black bg-[url('../../public/banner.jpg')] bg-center bg-cover md:bg-[length:50%]" />
      <div className="absolute inset-0 bg-black opacity-70 z-10" />
      <div className="relative w-full max-w-4xl h-auto p-6 bg-[#D99C52] rounded-lg shadow-lg z-10 mx-auto mt-16" style={{ marginRight: '15%' }}>
        <h2 className="mb-4 text-black text-2xl md:text-4xl text-center">Meus Agendamentos</h2>
        <MeusAgendamentos />

        <div className="mt-6 flex justify-center">
          <Link href="/novo_agendamento">
            <button className="bg-[#CFB28F] text-black text-lg px-6 py-2 rounded-lg flex items-center hover:bg-[#b89d75] transition border border-black">
              <span className="mr-2">+</span>
              Novo Agendamento
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgendamentosCliente;

