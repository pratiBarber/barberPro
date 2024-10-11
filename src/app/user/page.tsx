"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsTrash } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Barra Lateral */}
      <aside className="w-1/5 bg-[#D99C52] flex flex-col items-center py-6">
        <div className="mb-8">
          <Image
            src="/logo.png" 
            alt="Barber Logo"
            width={100} 
            height={100}
          />
        </div>

        <nav className="space-y-6 text-white text-lg">
          <Link href="" className="block hover:text-gray-300">
            Perfil
          </Link>
          <Link href="" className="block hover:text-gray-300">
            Agendamentos
          </Link>
          <Link href="" className="block hover:text-gray-300">
            Avaliações
          </Link>
          <Link href="" className="block hover:text-gray-300">
            Profissionais
          </Link>
          <Link href="" className="block hover:text-gray-300">
            Sair
          </Link>
        </nav>
      </aside>

      <main className="flex-1 relative bg-cover bg-center bg-[url('../../public/banner.jpg')]">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10 p-6 md:p-10 text-white">
          <h1 className="text-2xl md:text-3xl font-semibold text-center"> 
            Bem-vindo(a), $Username!
          </h1>
          <p className="mt-1 text-base md:text-lg text-center"> 
            Pronto para seu próximo corte?
          </p>

          <div className="flex flex-col items-center mb-8 mt-6">
            <Image
              src="/user-profile.jpg" 
              alt="Foto do Usuário"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg" 
            />
            <p className="mt-4 text-lg md:text-xl font-semibold">$Username</p>
          </div>

          <section className="mt-6 md:mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-center"> 
              Meus Agendamentos:
            </h2>

            <div className="mt-4 max-h-56 overflow-y-auto space-y-4 scrollbar-custom">
              <div className="p-3 md:p-4 bg-red-500 rounded-lg shadow-md flex justify-between items-center">
               <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    <p className="text-2xl md:text-2xl cursor-pointer">
                        <FaRegClock />
                    </p>
                    <p className="text-xs md:text-base ml-2">Horário: 20:00hrs</p>
                  </div>
                <div className="flex items-center">
                    <p className="text-2xl md:text-2xl cursor-pointer">
                      <IoCalendarSharp />
                    </p>
                    <p className="text-xs md:text-base ml-2">Dia: 16/08</p>
                </div>
               </div>
                <div className="text-xl md:text-base mr-6">
                    <p>Serviço(s):</p>
                </div>
               <div className="flex flex-col items-end mr-12">
                  <ul className="text-xs md:text-base list-disc pl-5">
                      <li>Cabelo</li>
                      <li>Barba</li>
                     <li>Sobrancelha</li>
                  </ul>
               </div>
                    <p className="text-4xl md:text-4xl cursor-pointer">
                       <BsTrash />
                    </p>
               </div>
        

               <div className="p-3 md:p-4 bg-orange-500 rounded-lg shadow-md flex justify-between items-center">
               <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    <p className="text-2xl md:text-2xl cursor-pointer">
                        <FaRegClock />
                    </p>
                    <p className="text-xs md:text-base ml-2">Horário: 20:00hrs</p>
                  </div>
                <div className="flex items-center">
                    <p className="text-2xl md:text-2xl cursor-pointer">
                      <IoCalendarSharp />
                    </p>
                    <p className="text-xs md:text-base ml-2">Dia: 16/08</p>
                </div>
               </div>
                <div className="text-xl md:text-base mr-6">
                    <p>Serviço(s):</p>
                </div>
               <div className="flex flex-col items-end mr-12">
                  <ul className="text-xs md:text-base list-disc pl-5">
                      <li>Cabelo</li>
                      <li>Barba</li>
                     <li>Sobrancelha</li>
                  </ul>
               </div>
                    <p className="text-4xl md:text-4xl cursor-pointer">
                       <BsTrash />
                    </p>
               </div>

               <div className="p-3 md:p-4 bg-green-500 rounded-lg shadow-md flex justify-between items-center">
               <div className="flex-grow">
                  <div className="flex items-center mb-6">
                    <p className="text-2xl md:text-2xl cursor-pointer">
                        <FaRegClock />
                    </p>
                    <p className="text-xs md:text-base ml-2">Horário: 20:00hrs</p>
                  </div>
                <div className="flex items-center">
                    <p className="text-2xl md:text-2xl cursor-pointer">
                      <IoCalendarSharp />
                    </p>
                    <p className="text-xs md:text-base ml-2">Dia: 16/08</p>
                </div>
               </div>
                <div className="text-xl md:text-base mr-6">
                    <p>Serviço(s):</p>
                </div>
               <div className="flex flex-col items-end mr-12">
                  <ul className="text-xs md:text-base list-disc pl-5">
                      <li>Cabelo</li>
                      <li>Barba</li>
                     <li>Sobrancelha</li>
                  </ul>
               </div>
                    <p className="text-4xl md:text-4xl cursor-pointer">
                       <BsTrash />
                    </p>
               </div>






        
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-6 animate-bounce">
    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
