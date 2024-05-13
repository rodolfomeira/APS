const ImagemBtModoEscuro = document.getElementById('ImagemBtModoEscuro')

// Adiciona um ouvinte de evento para o botão de alternância
document.getElementById('btModoEscuro').addEventListener('click', function () {
  // Alterna a classe 'dark-mode' no elemento body quando o botão é clicado
  document.body.classList.toggle('dark-mode')

  if (header.classList.contains('dark')) {
    header.classList.remove('dark')
  } else {
    header.classList.add('dark')
  }

  if (rodape.classList.aplicacaoModoEscuro('dark')) {
    rodape.classList.remove('dark')
  } else {
    rodape.classList.add('dark')
  }

})

function funcaoNovoMenuPrincipal() {
  var x = document.getElementById("novoMenuPrincipal");
  if (x.className === "menuPrincipal") {
    x.className += " responsivo"; /* Adiciona a classe "responsivo" */
  } else {
    x.className = "menuPrincipal"; /* Remove a classe "responsivo" */
  }
}

function mostrarMensagem() {
  alert('Enviado com sucesso!');
}