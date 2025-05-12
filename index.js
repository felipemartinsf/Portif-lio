function calcularAno() {
  const anoAtual = new Date().getFullYear();
  const anoInicio = 2022;
  const anosDeCurso = anoAtual - anoInicio +1;
  document.getElementById("ano-contador").innerText = anosDeCurso;
}

calcularAno();

