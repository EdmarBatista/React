import React from "react";

import HookState01 from "./components/UseState_01"
import HookState02 from "./components/UseState_02"
import HookState03 from "./components/UseState_03"
import HookState04 from "./components/UseState_04"
import HookState05 from "./components/UseState_05"
import HookState06 from "./components/UseState_06"
import HookState07 from "./components/UseState_07"


// Como é uma função anónima ela só vai receber o nome quando eu usar o import
export default () => {

    return (
        <>
            <h1>REACT HOOKS</h1>
            {/* <HookState01 /> */}
            {/* 15 - COMO EXECUTAR FUNÇÃO COM PARÂMETROS ASSOCIADA A UM EVENTO CLICK */}
            {/* <HookState02 />    */}
            {/* <HookState03 />    */}
            {/* <HookState04 />    */}
            {/* <HookState05 />    */}
            {/* <HookState06 />    */}
            <HookState07 />   
          
        </>
    )

}