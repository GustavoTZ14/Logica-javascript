/* Para criar um evento e definir o que será executado quando esse evento ocorrer,
 * deve-se utilizar uma palavra reservada para indicar para qual evento a linguagem
 * ficará "na escuta". A palavra reservada pode ser, por exemplo, */

// submit
// change
// click
// blur
// load

/* Para adicionar um ouvinte de evento a um elemento da página, 
 * utiliza-se o métado a baixo, com o evento e o nome de uma função ou
 * uma arrow function (função de seta) com os comandos a serem executados. */

// addEventListener()

frm.addEventListener("submit", (e) => { comandos })
