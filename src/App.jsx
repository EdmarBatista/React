import React from "react";

import Article from "../components/Article";

export default function App() {


    let artigos = [
        { id:1, titulo: "Notícia Três", subtitulo: "Subtítulo Notícia Três" },
        { id:2, titulo: "Notícia Quatro", subtitulo: "Subtítulo Notícia Quatro" },
        { id:3, titulo: "Notícia Cinco", subtitulo: "Subtítulo Notícia Cinco" },
        { id:4, titulo: "Notícia Seis", subtitulo: "Subtítulo Notícia Seis" },
        { id:5, titulo: "Notícia Sete", subtitulo: "Subtítulo Notícia Sete" },
        { id:6, titulo: "Notícia Oito", subtitulo: "Subtítulo Notícia Oito" },
    ]

    /* 
    Se não colocar um valor único para a key  em uma lista, vai dar um aviso no console
    Warning: Each child in a list should have a unique "key" prop. */
    let conteudo = artigos.map(art => <Article key = {art.id} titulo={art.titulo} subtitulo={art.subtitulo} />)


    return (
        <>
            <h3>App!</h3>

            {/*    As props são definidas nos meus elementos como se fossem atributos html */}
            <Article
                titulo="Notícia Um"
                subtitulo="Subtítulo Notícia Um"
            />
            <Article titulo="Notícia Dois" subtitulo="Subtítulo Notícia Dois" />

            {/* Posso colocar também as props a partir de um vetor de objetos */}
            <p style={{ color: 'red' }}> Renderizado com: artigos[0].titulo</p>
            <Article titulo={artigos[0].titulo} subtitulo={artigos[0].subtitulo} />
            <Article titulo={artigos[1].titulo} subtitulo={artigos[1].subtitulo} />


            <p style={{ color: 'red' }}> Renderizado com: MAPS</p>

            {conteudo}


        </>
    )
}