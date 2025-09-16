import { useEffect, useState } from "react";
import api from "../../Services/api";
import "../Home/home.css"
import { Link } from "react-router-dom"

function Home() {
    const [filmes, setFilmes] = useState([])

    async function buscarFilme() {
        const nomeFilme = "venom"
        const filme = await api.get(nomeFilme)

        console.log(filme.data.description)
        setFilmes(filme.data.description)
    }

    useEffect(() => {
        buscarFilme()
    }, [])


    return (
        <div className="container">
            <div className="listaFilmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme['#IMDB_ID']}>
                            <strong>{filme['#TITLE']}</strong>
                            <img src={filme['#IMG_POSTER']} alt={filme['#TITLE']} />
                            <Link to={filme["#IMDB_URL"]}>Assista o trailer</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
