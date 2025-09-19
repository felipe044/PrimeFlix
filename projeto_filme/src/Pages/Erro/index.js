import { Link } from "react-router-dom";
import "../Erro/erro.css"


function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h4>Página não encontrada</h4>
            <Link to="/">Ir para todos os filmes</Link>
        </div>
    )
}

export default Erro;