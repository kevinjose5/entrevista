const faturamentoPorEstado = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

function calcularPercentuais(faturamento) {
  const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

  let resultadoHTML = `<strong>Faturamento Total:</strong> R$ ${faturamentoTotal.toFixed(2)}<br><br>`;
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    resultadoHTML += `${estado}: ${percentual.toFixed(2)}%<br>`;
  }

  document.getElementById("resultado4").innerHTML = resultadoHTML;
}

window.addEventListener('load', calcularPercentuais(faturamentoPorEstado));