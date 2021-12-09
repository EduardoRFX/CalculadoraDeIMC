function Calcular() {
    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var imc = peso / (altura * altura);

    if(imc < 18.5){
        var resultadoImc = document.getElementById("resultado");
        resultadoImc.innerHTML = nome + ". Você esta magro, seu imc é: " + imc.toFixed(2);
    } else if (imc >= 18.5 && imc <= 24.9){
        var resultadoImc = document.getElementById("resultado");
        resultadoImc.innerHTML = nome + ". Você esta no peso normal, seu imc é: " + imc.toFixed(2);
    } else if (imc >= 24.9 && imc <= 30) {
        var resultadoImc = document.getElementById("resultado");
        resultadoImc.innerHTML = nome + ". Você esta acima do peso, seu imc é: " + imc.toFixed(2);
    } else if (imc >= 30) {
        var resultadoImc = document.getElementById("resultado");
        resultadoImc.innerHTML = nome + ". Você esta na obsidade, seu imc é: " + imc.toFixed(2);
    } 

    console.log(imc.toFixed(2));
    console.log("Esta Funcinando");
}