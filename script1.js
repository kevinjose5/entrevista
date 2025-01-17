
function calcula(){
    let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

document.getElementById("resultado1").innerText = "O valor de SOMA é: " + SOMA;

}
window.addEventListener('load', calcula)

