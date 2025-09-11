import React, { Component } from "react";
import {Link} from "react-router-dom";
import firebase from "../../Firebase";

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            soebrenome: ""
        }
        this.gravar = this.gravar.bind(this);
    }

    gravar (){
        firebase.firestore().collection("usuario").add({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });
    }

    render() {
        return (
            <div>
                <section class="container">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/Sobre">
                        <button>Sobre</button>
                    </Link>
                    <Link to="/Contato">
                        <button>Contato</button>
                    </Link>
                </section>
                <h1>Cadastro</h1>
                <section class="campo-cadastro">
                    <input className="input-cadastro" type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} />
                    <br/>
                    <input className="input-cadastro" type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} />
                    <br/>
                    <button className="botao-cadastro" onClick={this.gravar}>Gravar</button>
                </section>
            </div>
        )
    }
}

export default Cadastro;
