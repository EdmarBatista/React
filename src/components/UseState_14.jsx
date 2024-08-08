/* 

 */

import React, { useState } from "react"; // Posso importar duas coisas ao mesmo tempo


export default () => {

    const [text, setText] = useState('')
    const [nomes, setNomes] = useState([])

    function inserir() {
        setNomes(prev => [...prev, text])
        setText("") // Limpa o texto do input depois de já ter inserido
    }

    return (
        <>
            <h3>Input data - collection</h3>

            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />  {/* O value aqui serve para caso eu queiro colocar valores iniciais no useState */}

            <button onClick={inserir}>Inserir</button>

            <ul>
                {
                    nomes.map((data, index) => (     //  Por algum motivo usou ( em vez de {   gpt:  Se fossem usadas chaves {} após a seta =>, você teria que incluir um return explícito para retornar o JSX
                        <li key={index}>{data}</li>
                    ))
                }
                {/*
Em React, as chaves {} e os parênteses () têm usos distintos:
As chaves {} são usadas para incluir expressões JavaScript dentro do JSX.
Os parênteses () são usados para agrupar expressões, tornando o código mais legível, especialmente quando se usa a sintaxe JSX em retornos de funções. 
*/}

            </ul>
        </>

    )
}


