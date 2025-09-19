import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import "../Filme/filme.css"

function Filme() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [dadosFilme, setDadosFilme] = useState([])

    async function carregaFilme() {
        await api.get('',
            {
                params: { q: id }
            }).then((response) => {

                if (!response.data.description || response.data.description.length === 0) {
                    navigate("/", { replace: true });
                    return;
                }

                setDadosFilme(response.data.description)
                setLoading(false)
            }).catch(() => {
            })

    }

    useEffect(() => {
        carregaFilme()

        return (() => { console.log("componente foi desmontado ") })
    }, [])

    if (loading) {
        return (
            <div className="filme-info">
                <h1>carregando detalhes do filme...</h1>
            </div>
        )
    }

    return (
        <article>
            {dadosFilme.map((filme) => {
                return (
                    <div className="filme-info" key={filme["#IMDB_ID"]}>
                        <h1>{filme["#TITLE"]}</h1>
                        <img src={filme["#IMG_POSTER"]} alt="fotoFilmes"></img>

                        <p>Ano de lançamento: {filme["#YEAR"]}</p>
                        <p>Atores: {filme["#ACTORS"]}</p>


                        <div className="area-buttons">
                            <button>Salvar</button>

                            <button><a target="blank" rel="external" href={filme["#IMDB_URL"]}>Trailer</a></button>
                        </div>
                    </div>
                )
            })}
        </article>
    )
}

export default Filme;