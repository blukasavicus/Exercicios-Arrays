//2-Adicionar e remover elementos
//Crie um array com três nomes de aniamis. Adicione um novo animal no final do array e remova o primeiro animal. Imprima o array  resultante.


let animais=['Cachorro', 'Gato', 'Pássaro'];
console.log("Lista de animais: ", animais);

animais.push("Rato");

let removido= animais.shift()
console.log("Lista de animais atualizada: ", animais, removido);