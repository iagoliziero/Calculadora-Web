function calculoResultado() {
    //captura as variáveis
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let operacao = document.getElementById(opcoes1).value;
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

        case "sub":
        resultado = numero1 - numero2;
        break;

        case "mut": 
        resultado = numero1 * numero2;
        break;

        case "div":
        if(numero2 === 0) {
            alert("Divisão por 0 não é permitida")
        }
        resultado = numero1 / numero2;
        default:
            alert("insira um número válido")
    }
    //resultado
    document.getElementById("resultado").textContent = resultado;
}