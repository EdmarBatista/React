/* 15 - COMO EXECUTAR FUNÇÃO COM PARÂMETROS ASSOCIADA A UM EVENTO CLICK */

import { useState } from "react"


export default () => {
    const [valor, setValor] = useState(0);

    function diminuir() {
        setValor(v => v - 1)
    }
    function aumentar() {
        setValor(v => v + 1)
    }

    function diminuir_valor(a) {
        setValor(v => v - a)
    }
    return (
        <>
            <h4>useState</h4>
            <p>Valor: {valor}</p>
         {/*    Não posso passar o valor direto na chamada da função, se não vai dar loop infinito de renderização
            Então eu tenho que criar uma arrow function para passar o parametro    */}
        {/*     <button onClick={diminuir_valor(10)}>Diminuir Valor</button> */}
            <button onClick={()=>diminuir_valor(10)}>Diminuir Valor</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>

        </>

    )
}