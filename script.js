function cliqueiBotao() {
  const html = document.documentElement

  html.classList.toggle("light")

  // criei uma variavel para procuar dentro do html um id ou classe pelo nome de "profile img"
  const img = document.querySelector("#profile img")

  // verificando para mim se está no modo light
  if (html.classList.contains("light")) {
    //pegando o avatar light caso esteja no modo light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "imagem em light mode")
    // else se caso não tiver
  } else {
    // caso não estiver no modo light troque para a foto do modo dark
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "imagem em dark mode")
  }
}
