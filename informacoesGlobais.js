  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function vizualizarInformacoesGlobais() {

  < p class="graficos-container_texto">
  Você sabia que o mundo tem 7888000000 de pessoas e que aproximadamente 5040000000 estão conectadas em alguma rede social e passam em média 2.38 horas conectadas.
  </p>

    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
   paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)
    const container = document.getElementById(graficos-container)
  container.appendChild(paragrafo)
}  
  vizualizarInformacoesGlobais()
