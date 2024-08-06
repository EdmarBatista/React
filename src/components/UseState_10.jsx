/* 
Selecionar uma opção num select (Com 3 opções)
Apresentar o componente correspondente 
 */

import React, { useState } from "react"; // Posso importar duas coisas ao mesmo tempo


export default () => {

    const [tab, setTab] = useState(1)

    return (

        <>
            <h3>Condicional Rendering - Visible Tab </h3>

            <select onChange={(e) => setTab(parseInt(e.target.value))}>
                <option value="1">Tab 1</option>
                <option value="2">Tab 2</option>
                <option value="3">Tab 3</option>
            </select>

            {tab === 1 && <p>Tab 1</p>}  {/* Quem renderiza um paragrafo pode renderizar um componente inteiro */}
            {tab === 2 && <p>Tab 2</p>}
            {tab === 3 && <p>Tab 3</p>}

        </>

    )
}


