const botoes = document.getElementById("menu-mob");
const menuMobile = document.getElementById("menu-mobile");

botoes.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

//btn-whats show and hide
document.addEventListener("DOMContentLoaded", function () {
  const btnWhats = document.querySelector(".btn-whats");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      // Mostra o botão ao rolar mais de 100px
      btnWhats.style.display = "block"; // Exibe o botão
    } else {
      btnWhats.style.display = "none"; // Esconde o botão
    }
  });
});

// Função para abrir o modal com o vídeo
function openModal(videoId) {
  var videoModal = document.getElementById("videoModal");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  videoModal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  var videoModal = document.getElementById("videoModal");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  videoModal.style.display = "none";
}

// Evento de clique no botão para abrir o modal
var videoButton = document.querySelector(".btn-video");
videoButton.addEventListener("click", function (event) {
  event.preventDefault();
  var videoId = this.getAttribute("data-video-id");
  openModal(videoId);
});

// Evento de clique no botão de fechar do modal
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function () {
  closeModal();
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// Selecionar todos os links de navegação
const links = document.querySelectorAll('a[href^="#"]');

// Adicionar um listener de evento de clique a cada link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão do clique no link

    // Obter o alvo do link (o elemento com o ID correspondente ao valor do atributo href)
    const target = document.querySelector(link.getAttribute("href"));

    // Verificar se o alvo existe
    if (target) {
      // Calcular a posição de rolagem do alvo em relação ao topo da página
      const scrollTop = target.getBoundingClientRect().top + window.pageYOffset;

      // Animar a rolagem suave até o alvo
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  });
});

//btn whats scroll
document.addEventListener("DOMContentLoaded", function () {
  const btnWhats = document.querySelector(".btn-whats");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      // Mostra o botão ao rolar mais de 100px
      btnWhats.style.display = "block"; // Exibe o botão
    } else {
      btnWhats.style.display = "none"; // Esconde o botão
    }
  });
});
