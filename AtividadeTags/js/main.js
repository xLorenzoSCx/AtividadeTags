// Por ID
function clicarBotao() {
  var botao = document.getElementById("botaoClique");
  botao.textContent = "Botão clicado!";
  alert("Você clicou no botão!");
}

// Por classe
function mouseSobre() {
  var caixa = document.querySelector(".caixa");
  caixa.textContent = "Mouse em cima!";
  caixa.style.backgroundColor = "#a29bfe";
}

function mouseFora() {
  var caixa = document.querySelector(".caixa");
  caixa.textContent = "Passe o mouse aqui";
  caixa.style.backgroundColor = "#e0e0e0";
}

// Por nome
function enviarFormulario(event) {
  event.preventDefault();
  var campo = document.forms["formulario"]["campoTexto"].value;
  alert("Você digitou: " + campo);
}

// Por marca (primeiro <p>)
function clicarParagrafo() {
  var paragrafo = document.getElementsByTagName("p")[0];
  paragrafo.textContent = "Parágrafo clicado!";
}

// Por seletor personalizado (data attribute)
function clicarBtn1() {
  var clique = document.getElementsByName("clicarSpan")[0];
  clique.textContent = "viu só?";
  clique.style.backgroundColor = "#fab1a0";
}
function clicarBtn2() {
  let span2 = document.querySelector("#clicarSpan2");
  span2.textContent = "Buh!";
  span2.style.backgroundColor = "#fab1a0";
}

function mudarCor() {
  let m = document.getElementsByClassName("mudarCor")[0];
  m.style.color = "red";
  m.style.backgroundColor = "yellow";
}

function clicar2() {
  let s = document.querySelector("#clicar2");
  s.style.color = "green";
  s.style.backgroundColor = "yellow";
  s.innerHTML = "HUAHUAHUAHAU";
}

let b = document.getElementsByTagName("label")[0];
b.addEventListener("click", () => {
  b.style.color = "blue";
  b.style.backgroundColor = "red";
  b.innerHTML = "Boa";
});
