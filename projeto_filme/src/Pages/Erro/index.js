import { Link } from "react-router-dom";
import "../Erro/erro.css"


function Erro(){
    return(
        <div className="not-found">
            <h1>Página não encontrada</h1>
            <Link to="/">Ir para todos os filmes</Link>
        </div>
    )
}

export default Erro;