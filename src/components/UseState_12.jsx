/* 
Vamos criar um componente que vai aprentar condicionalmente um componente A ou B no seu interior.
A apresentação do componente A ou B deve ser controlada pelo click de um botão   
 */

import React, { useState } from "react"; // Posso importar duas coisas ao mesmo tempo
import CompA from './UseState_12a'
import CompB from './UseState_12b'


export default () => {

    const [state, setState] = useState(true)


    return (
        <>
            <h3>Condicional Rendering - Alternate between components</h3>
            <button onClick={() => setState(!state)}>Alternar entre componentes</button>

            {state ? <CompA /> : <CompB />}
        </>

    )
}


