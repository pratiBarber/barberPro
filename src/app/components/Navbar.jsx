import "./estilo.css";

export default function Navbar() {
    return (
        <nav className="nav-bar-pai">
            <div className="nav-bar-filho">
                <img src="/logo.png" alt="logo" className="foto" />
            </div>
            <div className="nav-bar-links">
                <ul>
                    <li><a href="#" className="hover:underline">Perfil</a></li>
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Avaliações</a></li>
                    <li><a href="#" className="hover:underline">Agendamentos</a></li>
                    <li><a href="#" className="hover:underline">Sair</a></li>
                </ul>
            </div>
            {/* Menu Hamburger para telas pequenas */}
            <div className="md:hidden">
                <button className="text-white">
                    {/* Ícone do menu (use um ícone ou texto, dependendo da sua preferência) */}
                    &#9776;
                </button>
            </div>
        </nav>
    );
}
