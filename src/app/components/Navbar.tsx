import "./estilo.css";

export default function Navbar() {
    return (
        <nav className="nav-bar-pai">
            <div className="nav-bar-filho">
                <img src="/logo.png" alt="logo" className="foto" style={{ width: '100%', height: '100%' }} />
            </div>

            <div className="mb-8">
         
        </div>
            <div className="nav-bar-links">
                <ul>
                    <li><a href="#" className="hover:underline">Perfil</a></li>
                    <li><a href="/user" className="hover:underline">Home</a></li>
                    <li><a href="/select" className="hover:underline">Agendamentos</a></li>
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
