
export default function Footer() {
    return (
        <footer className="bg-[#D99C52]">
            <div className="flex flex-row justify-between items-center max-w-[1500px] w-full mx-auto py-8 font-semibold leading-5 text-black">
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-[#1E1E1E] rounded-full">
                        <img src="/IconFace.png" alt="face" className="h-4" />
                    </div>
                    <div className="p-4 bg-[#1E1E1E] rounded-full">
                        <img src="/IconGIT.png" alt="git" className="h-4" />
                    </div>
                    <div className="p-4 bg-[#1E1E1E] rounded-full">
                        <img src="/IconTTW.png" alt="ttw" className="h-4" />
                    </div>
                    <div className="p-4 bg-[#1E1E1E] rounded-full">
                        <img src="/IconINSTA.png" alt="insta" className="h-4" />
                    </div>
                </div>
                <div className="flex flex-col items-center max-w-[265px] border-l border-black">
                    <div className="ml-8 flex flex-col items-center">
                        <img src="/logo.png" alt="logo" className="w-40 mb-6 h-28" />
                        <p className="text-start">Se você tiver alguma dúvida, sugestão ou feedback, não hesite em nos contatar através do nosso suporte no aplicativo ou pelo email suporte@searchbarber.com. Estamos sempre prontos para ajudar!</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center pb-8">
                <p>© Barber Search 2024 - Todos os direitos reservados</p>
            </div>
        </footer>
    );
}
