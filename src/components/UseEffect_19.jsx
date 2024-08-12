import React, { useState, useEffect } from 'react'

export default () => {

    const [paises, setPaises] = useState([])

    // buscar os dados da coleção de países em restcountries
    // https://restcountries.com/v3.1/all

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(resposta => resposta.json())
            .then(dados => setPaises(dados))
    }, [])    // Executa a função que busca os dados da API quando o componente é montado

    return (
        <>
            <h3>UseEffect 03 - Países</h3>
            <ul>
                {paises.map(pais => <li key={pais.cca2}>{pais.name.common}   - {pais.flag} - {pais.population}</li>)}
            </ul>
        </>
    )
}