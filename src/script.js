//Função para percorrer a lista de notas e somar. A função retorna o resultado da soma
function somarLista(lista) {
  var soma = 0;
  for (var i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  return soma;
}

function calcularMedia() {
  let soma = 0;
  let media = 0;
  let notas = [];

  let nome = prompt("Digite o seu nome:");
  alert("Bem vindo " + nome);

  let provas = prompt("Quantas notas deseja calcular?");

  //Loop para armazenar as notas baseado na quantidade de provas que o usuário vai informar
  while (notas.length != provas) {
    nota = parseInt(prompt("Digite a sua nota"));
    notas.push(nota);
  }

  // soma vai armazenar o resultado da função somarLista que tem como parâmetro uma lista de notas
  soma = somarLista(notas);

  media = soma / notas.length;
  media = media.toFixed(1);

  //Verificação de aprovado ou reprovado e ao final joga o resultado no HTML
  if (media < 6.0) {
    document.getElementById("resultado").innerHTML =
      "Reprovado com média " + media;
  }

  document.getElementById("resultado").innerHTML =
    "Aprovado com média " + media;
}
