import { useEffect, useState } from "react";
import api from "../../Services/api";
import "../Home/home.css"
import { Link } from "react-router-dom"

function Home() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    async function buscarFilme() {
        const nomeFilme = "venom"
        const filme = await api.get('', { params: { q: nomeFilme } })

        console.log(filme.data.description)
        setFilmes(filme.data.description)
        setLoading(false)
    }

    useEffect(() => {
        buscarFilme()
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="listaFilmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme['#IMDB_ID']}>
                            <strong>{filme['#TITLE']}</strong>
                            <img src={filme['#IMG_POSTER']} alt={filme['#TITLE']} />
                            <Link to={`/filme/${filme['#IMDB_ID']}`}>Acessar pagina do filme</Link>
                            <Link to={filme["#IMDB_URL"]}>Assista o trailer</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
