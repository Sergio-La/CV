const body = document.body;
/*checkbox mode*/
const btnMode = document.querySelector("#mode");
/*texto con el nombre*/
const textName = document.querySelector(".name");
/*texto con el nombre*/
const textTitle = document.querySelector(".title");
/*icnono de github*/
const icoGit = document.querySelector(".redes :nth-child(1)");
/*icnono de github*/
const icoLink = document.querySelector(".redes :nth-child(2)");
/*div donde se almacena la experiencia, proyectos, etc.*/
const divExperience = document.querySelector(".experience-flex");
/*botón del dowload-cv*/
const btnDowCont = document.querySelectorAll(".download-cv");
/*botón del contacme*/

btnMode.addEventListener("click", toggleMode);
btnDowCont[0].addEventListener("click", downloadCv);
btnDowCont[1].addEventListener("click", contacme);


/*Función para el selector de modo*/
function toggleMode() {
  body.classList.toggle('body-dark');
  textName.classList.toggle('name-dark');
  textTitle.classList.toggle('title-dark');
  //Cambiar la imágen de los iconos
  if (btnMode.checked) {
    icoGit.src = "./images/github-dark.svg";
    icoLink.src = "./images/link-dark.svg"
  } else {
    icoGit.src = "./images/github.svg";
    icoLink.src = "./images/link.svg"
  }
  divExperience.classList.toggle('experience-flex-dark');
}

function downloadCv() {
  if (btnDowCont[0].classList.contains("download-cv-active")) {
    btnDowCont[0].classList.remove("download-cv-active");
  } else if(!btnDowCont[0].classList.contains("download-cv-active" && btnDowCont[1].classList.contains("download-cv-active"))) {
    btnDowCont[0].classList.add("download-cv-active");
    btnDowCont[1].classList.remove("download-cv-active");

  }

}

function contacme() {
  if (btnDowCont[1].classList.contains("download-cv-active")) {
    btnDowCont[1].classList.remove("download-cv-active");
  } else if(!btnDowCont[1].classList.contains("download-cv-active" && btnDowCont[0].classList.contains("download-cv-active"))){
    btnDowCont[1].classList.add("download-cv-active");
    btnDowCont[0].classList.remove("download-cv-active");

  }
}