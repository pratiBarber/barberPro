"use client"

import {useState} from "react";

export default function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const barbers = [
        {name: "Barbeiro 1", image: "iconPessoa.png", rating: 5.0, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {name: "Barbeiro 2", image: "iconPessoa2.png", rating: 4.0, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {name: "Barbeiro 3", image: "iconPessoa3.png", rating: 4.8, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {name: "Barbeiro 4", image: "iconPessoa.png", rating: 4.3, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {name: "Barbeiro 5", image: "iconPessoa2.png", rating: 4.7, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {name: "Barbeiro 6", image: "iconPessoa3.png", rating: 4.6, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {name: "Barbeiro 7", image: "iconPessoa.png", rating: 4.9, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    ];

    const totalBarbers = barbers.length;
    const itemsPerPage = 3;

    // Avançar para o próximo grupo de barbeiros
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + itemsPerPage;
            // Se restarem menos de 3 barbeiros no final, mostrar apenas os que restam
            return newIndex >= totalBarbers ? 0 : newIndex;
        });
    };

    // Retroceder para o grupo anterior de barbeiros
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - itemsPerPage;
            // Se for retroceder além do início, ir para o último grupo
            return newIndex < 0 ? Math.max(totalBarbers - (totalBarbers % itemsPerPage || itemsPerPage), 0) : newIndex;
        });
    };

    // Pegar os barbeiros visíveis, garantindo que nunca pegue mais do que o disponível
    const visibleBarbers = barbers.slice(currentIndex, currentIndex + itemsPerPage);

    // Função para obter o caminho da imagem de estrelas correspondente ao rating
    const getStarImage = (rating: number) => {
        let roundedRating;
        const decimalPart = rating % 1; // Parte decimal do rating

        if (decimalPart === 0.5 && rating !== 5.0) {
            roundedRating = rating; // Mantém o rating para valores de 0.5
        } else if (decimalPart > 0.5) {
            roundedRating = Math.ceil(rating); // Arredonda para cima para valores acima de 0.5
        } else {
            roundedRating = Math.floor(rating); // Arredonda para baixo para valores abaixo de 0.5
        }

        return `/stars/${roundedRating}star.jpg`; // Exemplo: "/stars/5star.jpg"
    };

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
                        <img className="max-w-[40px]" src="/Button.png" alt="play"/>
                        <span className="text-sm max-w-[110px] ml-2">
                            Entenda como funciona
                        </span>
                    </div>
                </div>
                <div className="w-full mt-10 lg:mt-0 lg:w-auto">
                    <img className="w-full max-w-[380px] md:max-w-[500px] lg:max-w-[600px]" src="/home.png"
                         alt="barber"/>
                </div>
            </section>

            <section className="w-full py-10 bg-[#1E1E1E]">
                <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                    <button onClick={handlePrev} className="p-2 bg-gray-300 rounded-full">
                        &lt;
                    </button>
                    <div className="flex space-x-6 overflow-hidden">
                        {visibleBarbers.map((barber, index) => (
                            <div
                                key={index}
                                className="w-[300px] bg-[#D99C52] shadow-lg rounded-lg p-6 flex flex-col items-center text-black"
                            >
                                {/* Imagem do barbeiro em forma circular */}
                                <img
                                    src={barber.image}
                                    alt={barber.name}
                                    className="w-[150px] h-[150px] object-cover rounded-full mb-4"
                                />
                                {/* Nome do barbeiro */}
                                <h2 className="text-2xl font-semibold mb-2">{barber.name}</h2>
                                {/* Traço separador */}
                                <hr className="w-full border-t border-black mb-4"/>
                                {/* Breve descrição */}
                                <p className="text-center text-sm mb-4 break-words max-w-full">
                                    {barber.description}
                                </p>
                                {/* Avaliação em estrelas usando imagens */}
                                <img
                                    src={getStarImage(barber.rating)}
                                    alt={`Avaliação de ${barber.rating} estrelas`}
                                    className="w-[150px] h-auto" // Aumenta a largura da imagem de estrelas
                                />
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNext} className="p-2 bg-gray-300 rounded-full">
                        &gt;
                    </button>
                </div>
            </section>
        </main>
    );
}
