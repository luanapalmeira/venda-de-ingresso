function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let quantidade = parseInt(document.getElementById("qtd").value);

  // Verificar se a quantidade é um número positivo
  if (isNaN(qtd) || qtd <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  if (tipo.value == "pista") {
    comprarPista(quantidade);
  } else if (tipo.value == "superior") {
    comprarCadeiraSuperior(quantidade);
  } else {
    comprarCadeiraInferior(quantidade);
  }
}

function comprarPista(quantidade) {
  let quantidadePista = parseInt(
    document.getElementById("qtd-pista").textContent
  );

  if (quantidade > quantidadePista) {
    alert("Quantidade indisponível para tipo pista");
  } else {
    quantidadePista = quantidadePista - quantidade;
    document.getElementById("qtd-pista").textContent = quantidadePista;
    alert("Compra realizada com sucesso!");
  }
}

function comprarCadeiraSuperior(quantidade) {
  let quantidadeCadeiraSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );

  if (quantidade > quantidadeCadeiraSuperior) {
    alert("Quantidade indisponível para tipo pista");
  } else {
    quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - quantidade;
    document.getElementById("qtd-superior").textContent =
      quantidadeCadeiraSuperior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarCadeiraInferior(quantidade) {
  let quantidadeCadeiraInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );

  if (quantidade > quantidadeCadeiraInferior) {
    alert("Quantidade indisponível para tipo pista");
  } else {
    quantidadeCadeiraInferior = quantidadeCadeiraInferior - quantidade;
    document.getElementById("qtd-inferior").textContent =
      quantidadeCadeiraInferior;
    alert("Compra realizada com sucesso!");
  }
}
