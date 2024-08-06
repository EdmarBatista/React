/* 
Apresentar um parágrafo com "Usuário logado"
Um botão vai controlar se o usuário está logado ou não (fake)
alterando o valor de um state.   
 */

import React, { useState } from "react"; // Posso importar duas coisas ao mesmo tempo


export default () => {

    const [login, setLogin] = useState(false)
    const [btnText, setBtnText] = useState('Login')

    return (

        <>
            <h3>Condicional Rendering - Fake Login</h3>

            <button onClick={() => {
                setLogin(!login)
                setBtnText(login?'Login':'Logout')
            }}>{btnText}</button>


            {login && <p>Usuário Logado</p>}  {/* Se login for verdadeiro vai apresentar o que vem depois dos && */}

        </>

    )
}


