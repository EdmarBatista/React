/* Um componente pai vai receber atualização de valores de dois componentes filhos.
Esses componentes filhos são instâncias do mesmo componente contador (inc e dec)
Um dos componentes incrementa e decrementa de 5 em 5 e outro de 10 em 10.
No componente pai, vai ser apresentado o resultado da adição dos valores controlados pelos
dois componentes filhos. */

import React from "react";
import { useState } from "react";
import UseState_06a from "./UseState_06a";


export default () => {

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function decValor1() { setValor1(v => v - 5) }
    function incValor1() { setValor1(v => v + 5) }
    function decValor2() { setValor2(v => v - 10) }
    function incValor2() { setValor2(v => v + 10) }



    return (

        <>
            <h3>Exercício 04</h3>
            <h3>Adição de {valor1} + {valor2} = <strong>{valor1+valor2}</strong></h3>
            <hr></hr>
            {/* Passei a função como uma propriedade para o elemento filho */}
            <UseState_06a funcaoDec={decValor1} funcaoInc={incValor1} />
            <hr />
            <UseState_06a funcaoDec={decValor2} funcaoInc={incValor2} />
          
        </>
    )
}


