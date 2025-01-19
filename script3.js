

  
// function calcularFaturamento() {

//   let faturamentoMensal;

//   // try{
//   //   fetch("dados.json")
//   //       .then(Response => Response.json)
//   //       .then(data =>{
//   //      faturamentoMensal = data;
//   //     console.log(faturamentoMensal);
//   //       })

//   // }catch{
//   //   console.log("arquivo json não encontrado")
//   // }



// async function busca() {
//   await fetch('./dados.json')
//   .then(response => response.json())
//   .then(data => {
//     fat = data;
//     console.log(fat); // Aqui você pode usar os dados do JSON
//     return data;
//   })
//   .catch(erro => console.error('Erro ao carregar o JSON:', erro));
  
// }

// faturamentoMensal= busca();



//         const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
  
//         const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
//         const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
  
//         const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
//         const mediaMensal = somaFaturamento / diasComFaturamento.length;
  
//         const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
  
//         document.getElementById("resultado3").innerHTML = `
//           <strong>Menor valor de faturamento:</strong> R$ ${menorValor.toFixed(2)}<br>
//           <strong>Maior valor de faturamento:</strong> R$ ${maiorValor.toFixed(2)}<br>
//           <strong>Média mensal:</strong> R$ ${mediaMensal.toFixed(2)}<br>
//           <strong>Dias com faturamento acima da média:</strong> ${diasAcimaDaMedia} dias
//         `;
//       }
  
//       window.addEventListener('load', calcularFaturamento)
async function calcularFaturamento() {
  try {
    // carrega o json
    const response = await fetch('./dados.json');
    if (!response.ok) {
      throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
    }
    const faturamentoMensal = await response.json();//coleta dos dados 
    console.log(faturamentoMensal);
    
    
    
    // filtro dos dias sem faturamento 
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

    // Menor e maior valor de faturamento
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));
    

    // Média de faturamento
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;


    const diaDoMenorFaturamento= diasComFaturamento.filter(dia =>dia.valor == menorValor);

    const diasMenorFaturamentoFormatados = diaDoMenorFaturamento
  .map(dcia => `Dia ${dcia.dia}`)
  .join('<br>');


    // Dias acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;



    // Atualizar o HTML com os resultados
    document.getElementById("resultado3").innerHTML = `
      <strong>Menor valor de faturamento:</strong> R$ ${menorValor.toFixed(2)}<br>
      <strong>Dia do menor faturamento:</strong> ${diasMenorFaturamentoFormatados}<br>
      <strong>Maior valor de faturamento:</strong> R$ ${maiorValor.toFixed(2)}<br>
      <strong>Média mensal:</strong> R$ ${mediaMensal.toFixed(2)}<br>
      <strong>Dias com faturamento acima da média:</strong> ${diasAcimaDaMedia} dias
    `;



  } catch (erro) {
    console.error('erro no carregamento do faturamento: ', erro);

  }
}

// Executar a função quando a página carregar
window.addEventListener('load', calcularFaturamento);
