"use client";

import { useState } from 'react';
import './estilo.css'; // Certifique-se de incluir os estilos apropriados

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dados = [
        { src: '/pessoa1.jpeg', alt: 'Logo da Empresa 1', nome: 'Fulano', rate: '1' },
        { src: '/pessoa2.jpeg', alt: 'Logo da Empresa 2', nome: 'Beltrano', rate: '2' },
        { src: '/pessoa3.jpeg', alt: 'Logo da Empresa 3', nome: 'Sicrano', rate: '3' },
        { src: '/pessoa3.jpeg', alt: 'Logo da Empresa 4', nome: 'Ciclano', rate: '4' },
        { src: '/pessoa1.jpeg', alt: 'Logo da Empresa 5', nome: 'Zezinho', rate: '5' },
        { src: '/pessoa2.jpeg', alt: 'Logo da Empresa 6', nome: 'Marquinho', rate: '6' },
    ];

    const itemsPerPage = 3; // Número de itens a serem exibidos de cada vez

    const nextSlide = () => {
        if (currentIndex < Math.ceil(dados.length / itemsPerPage) - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Calcula os índices dos itens a serem exibidos
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = dados.slice(startIndex, endIndex);

    return (
        <main className="bg-white text-black flex-wrap">
            <section className="max-w-[1500px] w-full mx-auto flex flex-col lg:flex-row py-24 justify-between">
                <div className="max-w-[800px] w-full flex flex-col">
                    <h1 className="text-[#1E1F4B] mb-20 font-extrabold text-6xl tracking-wider leading-[85px]">
                        Nunca foi tão fácil cortar o cabelo com
                        <a className="text-[#D99C52]"> BARBER SEARCH.</a>
                    </h1>
                    <span className="text-[#2E3E5C] text-2xl mb-20 max-w-[480px]">
                        Nós te ajudamos a encontrar! Basta definir quando e onde que vamos te ajudar a encontrar o barbeiro perfeito.
                    </span>
                    <div className="flex items-center">
                        <button className="bg-[#D99C52] py-2 px-10 flex items-center text-white rounded-lg mr-20">
                            Quero começar!
                        </button>
                        <img className="max-w-[40px]" src="/Button.png" alt="play" />
                        <span className="text-sm max-w-[110px] ml-2">
                            Entenda como funciona
                        </span>
                    </div>
                </div>
                <div className="w-full mt-10 lg:mt-0 lg:w-auto">
                    <img className="w-full max-w-[380px] md:max-w-[500px] lg:max-w-[600px]" src="/home.png" alt="barber" />
                </div>
            </section>
            <section className="carrouselSectionMain">
                <div className="carrouselDiv">
                    <div className="carrousel flex overflow-hidden">
                        <img className="setas" onClick={prevSlide} src="/seta_esquerda.png" alt="seta esquerda" />
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                        >
                            {displayedItems.map((item, index) => (
                                <div key={index} className="dados w-1/3 p-2">
                                    <img src={item.src} alt={item.alt} className="w-full" />
                                    <span>{item.nome}</span>
                                    <span>{item.rate}</span>
                                </div>
                            ))}
                        </div>
                        <img className="setas" onClick={nextSlide} src="/seta_direita.png" alt="seta direita" />
                    </div>
                </div>
            </section>
        </main>
    );
}
