function calculo() {
    //captura as variáveis
    let numero1 = Number(document.getElementById('num1').value);
    let numero2 = Number(document.getElementById('num2').value);
    let operacao = (document.getElementById('operacao').value);
    let resultadoSaida = document.getElementById('resultadoSaida');
    let resultado;
     
    //caso for um valor inválido
    if(numero1 === "" || numero2 === "" || isNaN(numero1) || isNaN(numero2)) {
        alert("insira um número válido")  
        return;  
    }
    //swich para escolher as operacoes
    switch(operacao) {
        case "soma": 
        resultado = numero1 + numero2;
        break;

        case "subtrair":
        resultado = numero1 - numero2;
        break;

        case "mutiplicar": 
        resultado = numero1 * numero2;
        break;

        case "dividir":
        if(numero2 === 0) {
            alert("Divisão por 0 não é permitida")
            return;
        }
        resultado = numero1 / numero2;
        default:
            alert("insira um número válido")
    }
    //resultado
    resultadoSaida.textContent = "resultado: " + resultado;
}