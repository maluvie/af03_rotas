import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contato from "./paginas/Contato/indexContato";
import Cadastro from "./paginas/Cadastro/indexCadastro";
import Home from "./paginas/Home/indexHome";
import NotFound from "./paginas/NotFound/indexNotFound";
import Sobre from "./paginas/Sobre/indexSobre";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" Component={Home} />
                <Route exact={true} path="/Cadastro" Component={Cadastro} />
                <Route exact={true} path="/Sobre" Component={Sobre} />
                <Route exact={true} path="/Contato" Component={Contato} />
                <Route exact={true} path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;