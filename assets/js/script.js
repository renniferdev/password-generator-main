document.addEventListener("DOMContentLoaded", function () {
  // Mudando o fundo para um gradiente de azul e verde
  document.body.style.background = "linear-gradient(45deg, #1a73e8, #34a853)";

  // Adicionando efeito de partículas (simples exemplo)
  let contentDiv = document.querySelector(".content");

  // Verificando se o elemento com a classe .content foi encontrado
  if (contentDiv) {
    contentDiv.style.position = "relative";
    contentDiv.style.color = "#fff";

    const particles = 50;
    for (let i = 0; i < particles; i++) {
      let particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.top = `${Math.random() * window.innerHeight}px`;
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = "#fff";
      particle.style.animation = `move 5s linear infinite`;
      contentDiv.appendChild(particle);
    }

    // Adicionando o CSS para animação das partículas
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes move {
        0% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.5); opacity: 0.5; }
        100% { transform: scale(1); opacity: 0.8; }
      }
    `;
    document.head.appendChild(style);
  } else {
    console.error("Elemento com a classe .content não encontrado.");
  }
});
