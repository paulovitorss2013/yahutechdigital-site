// =========================================================
// SCRIPT DO CARROSSEL
// Controla a troca automática dos slides e os pontos (dots)
// de navegação abaixo do mockup de celular
// =========================================================
(function () {
  // Seleciona todos os slides e o container das bolinhas
  var slides = document.querySelectorAll(".slide");
  var dotsWrap = document.getElementById("dots");
  var atual = 0; // índice do slide atualmente visível

  // Cria uma bolinha (dot) para cada slide existente
  slides.forEach(function (_, i) {
    var d = document.createElement("div");
    d.className = "dot" + (i === 0 ? " ativo" : "");
    d.addEventListener("click", function () {
      ir(i); // clique na bolinha leva direto ao slide correspondente
    });
    dotsWrap.appendChild(d);
  });
  var dots = dotsWrap.querySelectorAll(".dot");

  // Função responsável por trocar o slide ativo
  function ir(i) {
    slides[atual].classList.remove("ativo");
    dots[atual].classList.remove("ativo");
    atual = i;
    slides[atual].classList.add("ativo");
    dots[atual].classList.add("ativo");
  }

  // Troca automática de slide a cada 4.2 segundos
  setInterval(function () {
    ir((atual + 1) % slides.length);
  }, 5500);
})();
