import {Link} from "react-router-dom";

const Sobre = () => {
    return(
        <div>
            <section class="container">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/Cadastro">
                    <button>Cadastro</button>
                </Link>
                <Link to="/Contato">
                    <button>Contato</button>
                </Link>
            </section>
            <h1>Sobre</h1>
            <h2>Aplicação em React com rotas</h2>
            <p>Ferramentas utilizadas:</p>
            <ul>
                <li>React</li>
                <li>React Router Dom</li>
                <li>JavaScript</li>
                <li>Html</li>
                <li>Css</li>
            </ul>
        </div>
    )
}
export default Sobre;
