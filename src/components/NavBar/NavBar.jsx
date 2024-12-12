import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <p>Logo</p>
            <ul>
                <li>Inicio</li>
                <li>Categorias</li>
                <li>Contactanos</li>
                <li>Iniciar Sesion</li>
            </ul>
        </nav>
    )
} 

const saludo = "Hola Leonel";

// export default NavBar

export {NavBar, saludo};