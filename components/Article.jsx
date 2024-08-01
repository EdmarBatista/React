export default function Article({titulo,subtitulo}){
    return (
        <>
       {/*  Com a desestruturação eu não preciso usar o props. */}
        <h3>{titulo}</h3>
        <h5>{subtitulo}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, deleniti.</p>
        </>
    )
}


export  function Article2(props){
    return (
      /*   Sem a desestruturação eu devo usar o props. */
        <>
        <h3>{props.titulo}</h3>
        <h5>{props.subtitulo}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, deleniti.</p>
        </>
    )
}