import React from "react";
import { useState } from "react";


export default ({unidades}) => {

    const [valor, setValor] = useState(0);


    function decrementar() {
        setValor(v => v - unidades)
    }

    function incrementar() {
        setValor(v => v + unidades)
    }

    return (
        <>
            <button onClick={decrementar}>-</button>
            <h3>Valor: <strong>{valor}</strong></h3>
            <button onClick={incrementar}>+</button>

        </>

    )
}