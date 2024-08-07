/* 
Temos um botão e um parágrafo
O parágrafo tem uma classe de CSS (paragrafo)
Adicionalmente tem outra classe (classUm ou classDois)
A ideia é o botão alternar entre classUm e classDoís, mantendo a
classe paragrafo.
NOTA: Obviamente, o resultado da alternancia de classes deve
refletir-se no aspeto visual do elemento
 */

import React, { useState } from "react"; // Posso importar duas coisas ao mesmo tempo
import "./UseState_11.css"

export default () => {

    const [state, setState] = useState(true)

    const class1 = "classUm"
    const class2 = "classDois"

    return (

        <>
            <h3>Condicional Rendering - Change CSS Class</h3>
            <button onClick={() => setState(!state)}>Alterar Parágrafo</button>
            {/* O código dentro das {} virá código JavaSCript */}
            <p className={`paragrafo ${state ? class1 : class2}`}>Texto que vai ter o seu aspecto alterado!</p>
        </>

    )
}


