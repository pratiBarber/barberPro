import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
    return (
        <main className="bg-white text-black flex-wrap">
            <Header />

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
            <Footer
             />
        </main>
    );
}
