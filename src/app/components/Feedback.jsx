"use client"

import { useState } from "react";
import "tailwindcss/tailwind.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Feedback() {
  const [pessoaDestaque, setPessoaDestaque] = useState(0);

  const pessoas = [
    {
      nome: "Joao",
      resumo:
        "Excelente trabalho na refatoração do código! As melhorias na arquitetura e na organização do projeto tornaram o código muito mais limpo e fácil de manter. A forma como você implementou a autenticação foi particularmente impressionante, garantindo não apenas segurança, mas também uma experiência de usuário suave.",
      foto: "/iconPessoa.png",
      rate: "/iconRate.png",
    },
    {
      nome: "Erica",
      resumo:
        "Excelente trabalho na refatoração do código! As melhorias na arquitetura e na organização do projeto tornaram o código muito mais limpo e fácil de manter. A forma como você implementou a autenticação foi particularmente impressionante, garantindo não apenas segurança, mas também uma experiência de usuário suave.",
      foto: "/iconPessoa3.png",
      rate: "/iconRate.png",
    },
    {
      nome: "Pedro",
      resumo:
        "Excelente trabalho na refatoração do código! As melhorias na arquitetura e na organização do projeto tornaram o código muito mais limpo e fácil de manter. A forma como você implementou a autenticação foi particularmente impressionante, garantindo não apenas segurança, mas também uma experiência de usuário suave.",
      foto: "/iconPessoa2.png",
      rate: "/iconRate.png",
    },
  ];

  return (
    <main>
      <Header />
      <div className="bg-[#1E1E1E] min-h-screen">
        <div className="max-w-[1500px] w-full mx-auto p-12">
          <div className="py-16">
            <div className="bg-[#D99C52] flex flex-col md:flex-row items-center justify-between max-w-[1300px] w-full mx-auto border border-black rounded-[6px_20px_20px_20px] p-6">
              <div className="flex flex-col items-center w-[40%]">
                <img
                  className="w-[179px] h-[217px] object-cover rounded-lg"
                  src={pessoas[pessoaDestaque].foto}
                  alt={pessoas[pessoaDestaque].nome}
                />
                <h4 className="mt-4 max text-xl font-semibold">{pessoas[pessoaDestaque].nome}</h4>
              </div>
              
              <div className="flex flex-col justify-start w-full mt-6 md:mt-0 p-5 font-bold text-xl">
                <p>{pessoas[pessoaDestaque].resumo}</p>
                <img src={pessoas[pessoaDestaque].rate} alt="Rate" className="mt-4 max-w-[300px]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between max-w-[1500px] w-full">
            <div>
              {pessoas.map((pessoa, index) => (
                <div
                  key={index}
                  className="flex max-w-[629px] w-full py-7 cursor-pointer"
                  onClick={() => setPessoaDestaque(index)}
                >
                  <div className="flex items-center bg-[#D99C52] border border-black rounded-[6px_20px_20px_20px] p-4 w-full">
                    <div className="flex flex-col items-center w-[40%]">
                      <img
                        className="w-[99px] h-[98px] object-cover border border-gray-300 rounded-full"
                        src={pessoa.foto}
                        alt={pessoa.nome}
                      />
                      <h4 className="mt-2 text-lg font-semibold">{pessoa.nome}</h4>
                    </div>

                    <div className="flex flex-col justify-start w-full p-5 text-sm font-bold">
                      <p>{pessoa.resumo}</p>
                      <img src={pessoa.rate} alt="Rate" className="mt-4 max-w-[100px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 md:mt-0">
              <img
                className="max-w-[421px] max-h-[612px]"
                src="./imgCadeira.png"
                alt="Cadeira"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
