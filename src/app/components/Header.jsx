"use client";

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="shadow-2xl bg-white">
            <div className="flex justify-between max-w-[1500px] w-full mx-auto bg-white p-7 text-black font-sans text-base font-normal">
                <div className="flex items-center gap-[67px]">
                    <img src="/logo.png" alt="logo" />
                </div>

                <div className="header-links flex flex-col md:flex-row md:gap-[67px] items-center">
                    <a href="#">Início</a>
                    <a href="#">Opinião dos Clientes</a>
                </div>
                <div className="header-links flex flex-col md:flex-row md:gap-[67px] items-center mt-4 md:mt-0 custom-button-spacing">
                    <a href="#">Fazer Login</a>
                    <a
                        className="button px-10 py-2.5 rounded-lg bg-[#D99C52] text-white mt-4 md:mt-0"
                        href="#"
                    >
                        Crie sua Conta
                    </a>
                </div>
                <nav className="hidden absolute items-center md:flex md:items-center md:w-auto gap-[67px]">
                </nav>

                <div className="button-burguer block md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-white flex flex-col items-center text-black space-y-6 p-6 z-50">
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Início</a>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Opinião dos Clientes</a>
                    <a href="#" onClick={() => setIsMenuOpen(false)}>Fazer Login</a>
                    <a
                        className="px-10 py-2.5 rounded-lg bg-[#D99C52] text-white"
                        href="#"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Crie sua Conta
                    </a>
                </nav>
            )}

        </header>
    );
}
