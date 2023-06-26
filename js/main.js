const botoes = document.getElementById("menu-mob");
const menuMobile = document.getElementById("menu-mobile");

botoes.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
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
