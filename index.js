function calcularAno() {
  const anoAtual = new Date().getFullYear();
  const anoInicio = 2022;
  const anosDeCurso = anoAtual - anoInicio +1;
  document.getElementById("ano-contador").innerText = anosDeCurso;
}

calcularAno();

function mostrarData() {
    const dataAtual = new Date(); 
    const mes = dataAtual.getMonth() + 1; 
    const ano = dataAtual.getFullYear();

    const mesFormatado = mes < 10 ? `0${mes}` : mes;

    document.getElementById("data-atual").innerText = `${mesFormatado}/${ano}`;
}

mostrarData();
