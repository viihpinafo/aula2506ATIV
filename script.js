let quantidade = prompt("Quantos números você quer digitar?");
quantidade = parseInt(quantidade);

if (!Number.isInteger(quantidade) || quantidade <= 0) {
  alert("Por favor, digite um número inteiro positivo.");
} else {
  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número:"));
    if (!isNaN(numero)) {
      soma += numero;
    } else {
      alert("Valor inválido. Esse número será ignorado.");
    }
  }

  let media = soma / quantidade;
  alert("A média dos números digitados é: " + media.toFixed(2));
}
