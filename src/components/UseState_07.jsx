/* Um componente pai tem 3 componentes de inc e dec (a mesma instância)
O componente pai tem um state que é um array de valores numéricos
Cada componente vai controlar um valor desse array
Os três valores do array devem ser apresentados no componente pai */

import React from "react";
import { useState } from "react";
import UseState_07a from "./UseState_07a";


export default () => {

    const [valor, setValor] = useState([0, 0, 0]); // useState de Array


    //  function incValor1() { setValor(v => v[0] + 1) }   // Essa solução não vai funcionar

    function atualizar(indice, unidade) {
        // buscar o array
        // alterar o array
        // atualizar o aray   
        const tmp = [...valor]  // Na prática estou duplicando o array
        tmp[indice] = tmp[indice] + unidade
        setValor(tmp)
    }

    function decValor1() { atualizar(0, -1) } // O índice 0 vai atualizar em -1
    function incValor1() { atualizar(0, 1) }
    function decValor2() { atualizar(1, -1) } 
    function incValor2() { atualizar(1, 1) }
    function decValor3() { atualizar(2, -1) }
    function incValor3() { atualizar(2, 1) }







    return (

        <>
            <h3>Exercício 05</h3>

            <ul>
                <li>{valor[0]}</li>
                <li>{valor[1]}</li>
                <li>{valor[2]}</li>
            </ul>
            <hr></hr>
            {/* Passei a função como uma propriedade para o elemento filho */}
            <UseState_07a funcaoDec={decValor1} funcaoInc={incValor1} />
            <hr />
            <UseState_07a funcaoDec={decValor2} funcaoInc={incValor2} />
            <hr />
            <UseState_07a funcaoDec={decValor3} funcaoInc={incValor3} />

        </>
    )
}


