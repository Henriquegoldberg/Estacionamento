function calcular() {
    var nome = document.getElementById("nome").value;
    var placa = document.getElementById("placa").value;
    var carro = document.getElementById("carro").value;
    var dias = parseInt(document.getElementById("dias").value);
    var diaria = parseFloat(document.getElementById("diaria").value);

    if (nome === "" || placa === "" || carro === "" || isNaN(dias) || isNaN(diaria) || dias <= 0 || diaria <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var valorTotal = dias * diaria;
    var desconto = valorTotal * 0.10;
    var valorComDesconto = valorTotal - desconto;

    document.getElementById("resultado").innerHTML =
        "<h2>Resumo</h2>" +
        "<p>Nome: " + nome + "</p>" +
        "<p>Placa: " + placa + "</p>" +
        "<p>Carro: " + carro + "</p>" +
        "<p>Vai ficar: " + dias + " dias</p>" +
        "<p>Valor sem desconto: R$ " + valorTotal.toFixed(2) + "</p>" +
        "<p>Valor total com o desconto de 10%: R$ " + valorComDesconto.toFixed(2) + "</p>";
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("carro").value = "";
    document.getElementById("dias").value = "";
    document.getElementById("diaria").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function sair() {
    // Redirecionar para uma página de boas-vindas ou outra, se necessário
    alert("Obrigado, vamos clonar a placa do seu carro");
    window.close();
}