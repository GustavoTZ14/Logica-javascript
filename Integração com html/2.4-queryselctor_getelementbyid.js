const resp = document.querySelector("h3") // primeiro elemento h3 da pagina
const cor = document.querySelector("#inCor") // elemento com id=inCor
const lista = document.querySelector(".lista") //elemento da class=lista

/*
 * nos exemplos a baixo, podemos armazenar a referência a um elemento
 * em uma variável e depois obter a sua propriedade.
*/

const frm = document.querySelector("form")
const nome = frm.inNome.value

/*
 * Ou, então utilizar um único comando, acessando diretamente a propriedade
 * que queremos obter, como a seguir.
*/

const nome = document.querySelector("form").inNome.value

// in (input) - campos de formulários
// out (output) - espaços de saída
