
      const faturamentoMensal = [
        { "dia": 1, "valor": 1200.50 },
        { "dia": 2, "valor": 0 },
        { "dia": 3, "valor": 850.30 },
        { "dia": 4, "valor": 0 },
        { "dia": 5, "valor": 900.00 },
        { "dia": 6, "valor": 0 },
        { "dia": 7, "valor": 0 },
        { "dia": 8, "valor": 1000.20 },
        { "dia": 9, "valor": 1250.75 },
        { "dia": 10, "valor": 0 },
        { "dia": 11, "valor": 1500.00 },
        { "dia": 12, "valor": 1350.40 },
        { "dia": 13, "valor": 0 },
        { "dia": 14, "valor": 1280.60 },
        { "dia": 15, "valor": 0 },
        { "dia": 16, "valor": 920.50 },
        { "dia": 17, "valor": 1150.80 },
        { "dia": 18, "valor": 0 },
        { "dia": 19, "valor": 1340.00 },
        { "dia": 20, "valor": 0 },
        { "dia": 21, "valor": 1240.10 },
        { "dia": 22, "valor": 1350.00 },
        { "dia": 23, "valor": 920.20 },
        { "dia": 24, "valor": 0 },
        { "dia": 25, "valor": 1110.80 },
        { "dia": 26, "valor": 1300.50 },
        { "dia": 27, "valor": 1400.00 },
        { "dia": 28, "valor": 0 },
        { "dia": 29, "valor": 950.60 },
        { "dia": 30, "valor": 800.40 }
      ];
  
      function calcularFaturamento() {
        const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
  
        const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
        const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
  
        const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;
  
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
  
        document.getElementById("resultado3").innerHTML = `
          <strong>Menor valor de faturamento:</strong> R$ ${menorValor.toFixed(2)}<br>
          <strong>Maior valor de faturamento:</strong> R$ ${maiorValor.toFixed(2)}<br>
          <strong>Média mensal:</strong> R$ ${mediaMensal.toFixed(2)}<br>
          <strong>Dias com faturamento acima da média:</strong> ${diasAcimaDaMedia} dias
        `;
      }
  
      window.addEventListener('load', calcularFaturamento)
