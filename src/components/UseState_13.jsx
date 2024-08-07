/* 
Como obter dados a partir de um input e apresentar no browser
 */

import React, { useState } from "react"; // Posso importar duas coisas ao mesmo tempo


export default () => {

    const [text, setText] = useState('Inicial')
    return (
        <>
            <h3>Input data</h3>
            {/* 
        Crie um campo de entrada (input) de texto.
        A propriedade "value" do input está vinculada ao estado "text",
        assim, o valor do input sempre será igual ao valor atual do estado "text".
      */}
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />  {/* O value aqui serve para caso eu queiro colocar valores iniciais no useState */}

            <p>{text}</p>

        </>

    )
}


