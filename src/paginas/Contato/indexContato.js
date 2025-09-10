import {Link} from "react-router-dom";

const Contato = () => {
    return(
        <div>
            <section class="container">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/Sobre">
                    <button>Sobre</button>
                </Link>
            </section>
            <h1>Contato</h1>
            <p>Desenvolvedora: Malu Vieira</p>
            <p>E-mail: maluvieira00@gmail.com</p>
        </div>
    )
}
export default Contato;
