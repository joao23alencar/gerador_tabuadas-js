const input = document.querySelector('#txtn')
const res = document.querySelector('#res')
const btnGerar = document.querySelector('#btnGerar')
const btnDark = document.querySelector('#btnDark')
const btnLimpar = document.querySelector('#btnLimpar')

// Gerar tabuada ao clicar no botão
btnGerar.addEventListener('click', gerartab)

// Gerar tabuada ao apertar Enter
input.addEventListener('keyup', (e) => {
  if (e.key === "Enter") gerartab()
})

// Limpar input e resultados
btnLimpar.addEventListener('click', () => {
  input.value = ""
  res.innerHTML = "Sua tabuada aparecerá aqui."
})

function gerartab() {
  let number = Number(input.value)

  if (input.value.trim() === '') {
    alert("⚠️ Digite um número válido!")
    return
  }

  if (number > 100) {
    alert("😱 Caramba! Esse número é grande demais, vai dar trabalho!")
  }

  res.innerHTML = "" // limpa resultados antigos
  for (let c = 1; c <= 10; c++) {
    res.innerHTML += `${number} x ${c} = ${number * c} <br>`
  }

  // Ativa sombra animada
  res.classList.add('ativo')
  setTimeout(() => res.classList.remove('ativo'), 800)
}

// Dark mode
btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
