import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import "../Filme/filme.css"

function Filme() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [dadosFilme, setDadosFilme] = useState([])


    async function carregaFilme() {
        const reqApi = await api.get('', { params: { q: id } })
        setDadosFilme(reqApi.data.description)
        setLoading(false)

        //teste
        console.log(reqApi.data.description)

    }

    useEffect(() => {
        carregaFilme()
    }, [])

    if (loading) {
        return (
            <div className="load">
                <h1>carregando dados do filme...</h1>
            </div>
        )
    }

    return (
        <div className="filme">
            {dadosFilme.map((filme)=>{
                return(
                    <article key={filme["#IMDB_ID"]}>
                        <h1>{filme["#ACTORS"]}</h1>
                    </article>
                )
            })}
        </div>
    )
}

export default Filme;