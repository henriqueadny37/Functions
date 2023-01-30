function acao1(){
    console.log("acao1")
}

export default function botao(){
    function acao2(){
        console.log("acao2")
    }
    function acao5(e){
        console.log(e)
    }
    return(
        <div>
            <button onClick={acao1}>Clicar #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function (){
                console.log("acao3")
            }}>Click #03</button>
            <button onClick={() => console.log("acao4")}>
                Click #04
            </button>
            <button onClick={acao5}>Click #05</button>
            <button onClick={e => acao5(e.altKey)}>
                Click V2
            </button>
            <input onChange={e => console.log(e.target.value)} />
        </div>
    )
}
// pode chamar funções a partir de eventos ^
// varias formas de criar funções via evento, e lembrando que acionando 'e' em uma função no react é evento (e)
// por exemplo
// function action (e){
// console.log(e)
// }
// voce também pode criar uma função dentro de outra função por exemplo

// export default FUNCTION botao(){
//     FUNCTION acao2(){
//         console.log("acao2")
//      } 
// isso se chama comunicação direta