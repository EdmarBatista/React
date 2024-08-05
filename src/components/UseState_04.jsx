/* Um componente que vai apresentar 3 contadores criados a partir do mesmo componente
apresentar esses componentes lado a lado
o primeiro componente deve incrementar e decrementar de 1 em 1
o segundo de 5 em 5
 o terceiro de 10 em 10 */
import React from "react";
import { useState } from "react";
import "./UseState_04.css";
import UseState_04a from "./UseState_04a";

export default () => {



    return (
        <>

            <h4>Exercício 02</h4>
            <div className="layout">
                <UseState_04a unidades={1} />
                <UseState_04a unidades={5} />
                <UseState_04a unidades={10} />


            </div>



        </>

    )
}