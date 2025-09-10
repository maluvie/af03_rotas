import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <section class="container">
                <Link to="/Sobre">
                    <button>Sobre</button>
                </Link>
                <Link to="/Contato">
                    <button>Contato</button>
                </Link>
            </section>
            <h1>Bem-vindo à nossa página principal!</h1>
        </div>
    )
}
export default Home;
