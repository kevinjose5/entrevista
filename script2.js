
      function verificarFibonacci() {
        const numero = parseInt(document.getElementById("numero").value);
  
        if (isNaN(numero) || numero < 0) {
          document.getElementById("resultado2").innerText = "Por favor, insira um número válido.";
          return;
        }
  
        let a = 0, b = 1, temp;
  
        while (a < numero) {
          temp = a + b;
          a = b;
          b = temp;
        }
  
        if (a === numero) {
          document.getElementById("resultado2").innerText = `O número ${numero} pertence à sequência de Fibonacci.`;
        } else {
          document.getElementById("resultado2").innerText = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
        }
      }
 