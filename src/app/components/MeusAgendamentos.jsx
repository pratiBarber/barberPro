import React from 'react';

const MeusAgendamentos = () => {
  const agendamentos = [
    { dia: '12/09/2024', horario: '14:00', servicos: 'Corte de cabelo, Barba, Sombrancelha' },
    { dia: '15/09/2024', horario: '16:00', servicos: 'Barba' },
    { dia: '20/09/2024', horario: '10:00', servicos: 'Corte de cabelo, Barba' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {agendamentos.map((agendamento, index) => (
        <div
          key={index}
          className="p-4 bg-[#CFB28F] rounded-lg text-black"
        >
          <p><strong>Dia:</strong> {agendamento.dia} | <strong>Horário:</strong> {agendamento.horario}</p>
          <p><strong>Serviços:</strong></p>
          <ol className="list-decimal pl-5">
            {agendamento.servicos.split(', ').map((servico, idx) => (
              <li key={idx}>{servico}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default MeusAgendamentos;
