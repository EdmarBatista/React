// Criar um componente que vai apresentar um UseState
// Criar outro componente, a ser apresentado dentro do componente anterior, que vai
//  ter um botão que vai atualizar o useState do componente "pai"


import React from "react";
import { useState } from "react";

import UseState_05a from "./UseState_05a";

export default () => {

    const [valor, setValor] = useState(0);

    function atualizarValor() {
        setValor(1000);
    }

    return (

        <>
            <h3>Exercício 03</h3>
            <h3>Valor: {valor}<strong></strong></h3>
            <hr></hr>
            {/* Passei a função como uma propredade para o elemento filho */}
            <UseState_05a funcao={atualizarValor} />
        </>
    )
}


