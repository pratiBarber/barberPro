"use client";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./estilos.css";

export default function Profile() {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // Profile state
    const [profile, setProfile] = useState({
        nome: "Carlos",
        contato: "9999-9999",
        email: "email@email.com",
        localizacao: "POA",
        sexo: "masculino",
        foto: "/pessoa1.png"
    });

    // Selected services state
    const [selectedServices, setSelectedServices] = useState({
        serviço: '',
        preco: '',
        horario: '',
        data: ''
    });

    // Modal visibility states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isTextoModalOpen, setIsTextoModalOpen] = useState(false); // New state for Texto modal

    // New service state
    const [newService, setNewService] = useState({ serviço: '', preco: '', horario: '', data: '' });

    // Services list state
    const [services, setServices] = useState([
        { serviço: 'Cabelo', preco: '30', horario: '20', data: '10/21' },
        { serviço: 'Barba', preco: '20', horario: '23', data: '10/21' },
        { serviço: 'Cabelo e Barba', preco: '50', horario: '21', data: '10/22' }
    ]);

    // Texto state
    const [texto, setTexto] = useState("Clique aqui para editar este texto"); // Initialize with default text

    // Function to add a new service
    function addService() {
        const { serviço, preco, horario, data } = newService;
        if (serviço && preco && horario && data) {
            setServices([...services, newService]);
            setNewService({ serviço: '', preco: '', horario: '', data: '' });
            setIsAddModalOpen(false);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    // Function to open the scheduling modal
    function openModal() {
        if (!selectedServices.serviço) {
            alert("Selecione todos serviço antes de agendar.");
        } else {
            setIsModalOpen(true);
        }
    }

    // Function to close the scheduling modal
    function closeModal() {
        setIsModalOpen(false);
    }

    // Functions to open and close the edit profile modal
    function openEditModal() {
        setIsEditModalOpen(true);
    }

    function closeEditModal() {
        setIsEditModalOpen(false);
    }

    // Functions to open and close the add service modal
    function openAddModal() {
        setIsAddModalOpen(true);
    }

    function closeAddModal() {
        setIsAddModalOpen(false);
    }

    // Functions to open and close the Texto edit modal
    function openTextoModal() {
        setIsTextoModalOpen(true);
    }

    function closeTextoModal() {
        setIsTextoModalOpen(false);
    }

    // Handle changes in the new service form
    function handleNewServiceChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;
        setNewService(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    // Functions to save selected service details
    function saveService(servico: string, preco: string) {
        setSelectedServices(prevState => ({
            ...prevState,
            serviço: servico,
            preco: preco
        }));
    }

    function saveHours(horario: string) {
        setSelectedServices(prevState => ({
            ...prevState,
            horario: horario
        }));
    }

    function saveData(data: string) {
        setSelectedServices(prevState => ({
            ...prevState,
            data: data
        }));
    }

    // Handle profile changes
    function handleProfileChange(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Handle Texto changes
    function handleTextoChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setTexto(e.target.value);
    }

    return (
        <main className="flex user-select-none" style={{ backgroundImage: "url(/fundo.png)" }}>
            <Navbar />

            <div className="flex flex-col m-5 bg-[#d99c523d] p-5 rounded-lg w-full md:p-10">
                {/* Profile Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center pb-5 gap-10 mx-5">
                    <div className="flex flex-col gap-5">
                        <p className='bg-[#D99C52] p-2 rounded'>Nome: {profile.nome}</p>
                        <p className='bg-[#D99C52] p-2 rounded'>Contato: {profile.contato}</p>
                        <p className='bg-[#D99C52] p-2 rounded'>Email: {profile.email}</p>
                        <p className='bg-[#D99C52] p-2 rounded'>Localização: {profile.localizacao}</p>
                        {isAuthenticated && (
                            <button onClick={openEditModal} className="bg-[#D99C52] p-2 rounded">Editar Perfil</button>
                        )}
                    </div>
                    <div className="max-w-[300px] w-full">
                        <img src={profile.foto} alt="Foto de perfil" className="w-full rounded" />
                    </div>
                </div>

                {/* Services and Scheduling Section */}
                <div className="pb-12 border-b-4 border-dotted border-black-500 flex flex-col items-center md:flex-row justify-between mx-5 gap-10">
                    {/* Serviços Prestados */}
                    <div className="flex-1">
                        <div className="flex text-start justify-between max-w-[500px]">
                            <h3 className="bg-[#D99C52] p-2 rounded">Serviços Prestados</h3>
                            <h3 className="bg-[#D99C52] p-2 rounded">Valor</h3>
                        </div>
                        <dl className="flex flex-col mt-5 bg-[#D99C52] p-5 rounded max-w-[500px]">
                            {services.map((service, index) => (
                                <div key={index} className="flex justify-between border-b border-dotted border-black">
                                    <dt
                                        onClick={() => saveService(service.serviço, service.preco)}
                                        className={`cursor-pointer ${selectedServices.serviço === service.serviço ? 'text-black	' : ''}`}
                                    >
                                        {service.serviço}
                                    </dt>
                                    <dd>{service.preco + 'R$'}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Horários e Data */}
                    <div className="flex-1">
                        <div className="flex text-start justify-between max-w-[500px]">
                            <h3 className="bg-[#D99C52] p-2 rounded">Horários</h3>
                            <h3 className="bg-[#D99C52] p-2 rounded">Data</h3>
                        </div>
                        <dl className="flex flex-col mt-5 bg-[#D99C52] pr-7 p-5 rounded max-w-[500px]">
                            {services.map((service, index) => (
                                <div key={index} className="flex justify-between border-b border-dotted border-black">
                                    <dt
                                        onClick={() => saveHours(service.horario)}
                                        className={`cursor-pointer ${selectedServices.horario === service.horario ? 'text-black	' : ''}`}
                                    >
                                        {service.horario + 'hrs'}
                                    </dt>
                                    <dd
                                        onClick={() => saveData(service.data)}
                                        className={`cursor-pointer ${selectedServices.data === service.data ? 'text-black	' : ''}`}
                                    >
                                        {service.data}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Selected Service and Actions */}
                    <div className="flex flex-col">
                        <div className='flex gap-10'>
                            <h3 className="bg-[#D99C52] p-2 rounded">Serviço Selecionado:</h3>
                            <h3
                                onClick={openModal}
                                className={`bg-[#ad043c] p-2 rounded cursor-pointer ${!selectedServices.serviço ? 'opacity-100 cursor-not-allowed' : ''}`}
                            >
                                Agendar:
                            </h3>
                            {isAuthenticated && (<button onClick={openAddModal} className="bg-[#d99c52b3] p-2 rounded">Adicionar Novo Serviço</button>)}
                        </div>
                        <ul className="bg-[#D99C52] p-5 rounded mt-5">
                            <li>Serviço: {selectedServices.serviço}</li>
                            <li>Preço: {selectedServices.preco + "R$"}</li>
                            <li>Horário: {selectedServices.horario + "hrs"}</li>
                            <li>Data: {selectedServices.data}</li>
                        </ul>
                    </div>
                </div>

                {/* Add Service Modal */}
                {isAddModalOpen && (
                    <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-[#D99C52] p-5 rounded-lg w-[90%] md:w-[400px]">
                            <h3 className="text-lg font-bold mb-4">Adicionar Novo Serviço</h3>
                            <input
                                type="text"
                                name="serviço"
                                value={newService.serviço}
                                onChange={handleNewServiceChange}
                                placeholder="Serviço"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <input
                                type="text"
                                name="preco"
                                value={newService.preco}
                                onChange={handleNewServiceChange}
                                placeholder="Preço"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <input
                                type="text"
                                name="horario"
                                value={newService.horario}
                                onChange={handleNewServiceChange}
                                placeholder="Horário"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <input
                                type="text"
                                name="data"
                                value={newService.data}
                                onChange={handleNewServiceChange}
                                placeholder="Data"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <div className="flex justify-end mt-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={closeAddModal}>Fechar</button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addService}>Adicionar</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Scheduling Confirmation Modal */}
                {isModalOpen && (
                    <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-[#D99C52] p-5 rounded-lg w-[90%] md:w-[400px]">
                            <h3 className="text-lg font-bold mb-4">Confirmação de Agendamento</h3>
                            <ul className="list-disc list-inside mb-4">
                                <li><strong>Serviço:</strong> {selectedServices.serviço}</li>
                                <li><strong>Preço:</strong> {selectedServices.preco}</li>
                                <li><strong>Horário:</strong> {selectedServices.horario}hrs</li>
                                <li><strong>Data:</strong> {selectedServices.data}</li>
                            </ul>
                            <div className="flex justify-end">
                                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={closeModal}>Fechar</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={closeModal}>Agendar</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit Profile Modal */}
                {isEditModalOpen && (
                    <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-[#D99C52] p-5 rounded-lg w-[90%] md:w-[400px]">
                            <h3 className="text-lg font-bold mb-4">Editar Perfil</h3>
                            <input
                                type="text"
                                name="nome"
                                value={profile.nome}
                                onChange={handleProfileChange}
                                placeholder="Nome"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <input
                                type="text"
                                name="contato"
                                value={profile.contato}
                                onChange={handleProfileChange}
                                placeholder="Contato"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                placeholder="Email"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <input
                                type="text"
                                name="localizacao"
                                value={profile.localizacao}
                                onChange={handleProfileChange}
                                placeholder="Localização"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <div className="flex justify-end mt-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={closeEditModal}>Fechar</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={closeEditModal}>Salvar</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Texto Edit Modal */}
                {isTextoModalOpen && (
                    <div className="modal fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-[#D99C52] p-5 rounded-lg w-[90%] md:w-[400px]">
                            <h3 className="text-lg font-bold mb-4">Editar Texto</h3>
                            <input
                                type="text"
                                value={texto}
                                onChange={handleTextoChange}
                                placeholder="Digite o novo texto"
                                className="border border-black p-2 mt-2 w-full"
                            />
                            <div className="flex justify-end mt-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={closeTextoModal}>Cancelar</button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={closeTextoModal}>Salvar</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Texto and Slider Section */}
                <div className="max-w-screen-sm m-auto bg-[#D99C52] flex flex-col justify-center items-center p-5 mt-10 rounded-lg">
                    {/* Editable Texto */}
                    {isAuthenticated ? (
                        <p onClick={openTextoModal} className="cursor-pointer text-white">
                            {texto}
                        </p>
                    ) : (
                        <p className="text-white">{texto}</p>
                    )}

                    {/* Slider */}
                    <div className="max-w-[200px] mt-9 w-full">
                        <Slider {...settings}>
                            <div><img src="/diploma.jpeg" alt="Diploma 1" className="w-full" /></div>
                            <div><img src="/diploma2.jpeg" alt="Diploma 2" className="w-full" /></div>
                            <div><img src="/diploma3.jpeg" alt="Diploma 3" className="w-full" /></div>
                        </Slider>
                    </div>
                </div>
            </div>
        </main>
    );
}
