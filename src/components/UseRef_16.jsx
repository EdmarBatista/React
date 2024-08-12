import React, { useRef } from "react";

export default () => {

    const valor = useRef(10) // Usado quando quero alterar o valor de uma variável, mas não quero que ela fique associada a uma nova renderização do meu componente

    function incremento() {
        valor.current = valor.current + 1
        console.log(valor.current)
    }

    console.log('componente renderizado!')

    return (
        <>
            <h3>React Hooks - UseRef</h3>
            <p>Valor: {valor.current}</p>  {/* Com o useRef devo usar o .current da variável */}
            <button onClick={incremento}>Incremento</button>
        </>
    )
}