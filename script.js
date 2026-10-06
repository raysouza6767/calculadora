    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const operacao = document.getElementById("operacao");
    const butaoCalcular = document.getElementById("botao-calcular");
    const resultado = document.getElementById("resultado");


    function calcular(a, b, sinal)  {
        switch (sinal) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "x":
                return a * b;
            case "/":
            if (b === 0) {
            return "Erro não é possivel dividir por zero"   
                }    
            return a / b;
            default:
                return "Operação inválida";        
        }
    }


    butaoCalcular.addEventListener("click", function () {
    const a = Number(numero1.value);
    const b = Number(numero2.value);
    const sinal = operacao.value;

    const resposta = calcular(a, b, sinal);

    resultado.textContent = "Resultado: " + resposta;
    });