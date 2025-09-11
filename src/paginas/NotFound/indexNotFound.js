import {Link} from "react-router-dom";

const NotFound = () => {
     return(
        <div>
            <section class="container">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/Cadastro">
                    <button>Cadastro</button>
                </Link>
            <Link to="/Sobre">
                <button>Sobre</button>
            </Link>
            <Link to="/Contato">
                <button>Contato</button>
            </Link>
            </section>
            <h1>Página não encontrada!</h1>
        </div>
    )
}
export default NotFound;