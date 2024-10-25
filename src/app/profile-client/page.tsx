"use client";
import React, { useState } from 'react';
import Navbar from "../components/navbar";
import "./estilos.css";

export default function Profile() {
    const [profile, setProfile] = useState({
        nome: "Carlos",
        contato: "9999-9999",
        email: "email@email.com",
        localizacao: "POA",
        sexo: "masculino",
        foto: "/pessoa1.png"
    });

        
    const [isOwner,SetOwner] = useState(false); // Altere conforme a lógica de autenticação

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    function openEditModal() {
        setIsEditModalOpen(true);
    }

    function closeEditModal() {
        setIsEditModalOpen(false);
    }

    function handleProfileChange(e) {
        const { name, value } = e.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                        {isOwner && (
                            <button onClick={openEditModal} className="bg-[#D99C52] p-2 rounded">Editar Perfil</button>
                        )}
                    </div>
                    <div className="max-w-[300px] w-full">
                        <img src={profile.foto} alt="Foto de perfil" className="w-full rounded" />
                    </div>
                </div>

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
            </div>
        </main>
    );
}
