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
/*Fondo portafolio habilidades*/
const backgroundPortfolioSkills = document.querySelector(
  ".portfolio-skills-flex"
);
const btnPortfolio = document.querySelectorAll(".portfolio");
/*contenedor donde se mostrará la spa*/
const sectionSkills = document.querySelector(".skills");
/*Seleccionar las skills*/
const skillsElemt = document.querySelectorAll(".skill");
/*contact-info*/
const contact_info = document.querySelector(".contact-info");
const btnContacme = document.querySelector("#cv-contact .download-cv:nth-child(2)");
/*Seleccionar foorer*/
const footer = document.querySelector("#footer");

let skillsPressed = false;
let contacmePressed = false;

btnMode.addEventListener("click", toggleMode);
btnPortfolio[0].addEventListener("click", skills);
btnContacme.addEventListener("click", contacme);

/*Función para el selector de modo*/
function toggleMode() {
  body.classList.toggle("body-dark");
  textName.classList.toggle("name-dark");
  textTitle.classList.toggle("title-dark");
  //Cambiar la imágen de los iconos
  if (btnMode.checked) {
    icoGit.src = "./images/github-dark.svg";
    icoLink.src = "./images/link-dark.svg";
  } else {
    icoGit.src = "./images/github.svg";
    icoLink.src = "./images/link.svg";
  }
  divExperience.classList.toggle("experience-flex-dark");
  //cambiar de color a los botones contacme y download
  btnDowCont[0].classList.toggle("download-cv-dark");
  btnDowCont[1].classList.toggle("download-cv-dark");
  //cambiar el color de fondo de la sección de portafolio y habilidades
  backgroundPortfolioSkills.classList.toggle("portfolio-skills-flex-dark");
  //Remover las clases de hover y active para los elementos de portfolio
  btnPortfolio[0].classList.toggle("portfolio-dark");
  // btnPortfolio[1].classList.toggle('portfolio-dark');

  skillsElemt.forEach((e) => e.classList.toggle("skill-dark"));
  contact_info.classList.toggle("contact-info-dark");
  footer.classList.toggle("footer-dark");
}

function skills() {
  if (!skillsPressed) {
    // Agrega la clase "show" a los elementos recién creados para activar la transición
    const skillsElements = sectionSkills.querySelectorAll(".skill");
    skillsElements.forEach((skill) => {
      skill.classList.add("show");
    });

    sectionSkills.classList.remove("collapsed");

    skillsPressed = true;
  } else {
    // Remueve la clase "show" para ocultar los elementos con animación
    const skillsElements = sectionSkills.querySelectorAll(".skill");
    skillsElements.forEach((skill) => {
      skill.classList.remove("show");
    });
    sectionSkills.classList.add("collapsed");

    skillsPressed = false;
  }
}

function contacme() {
  if (!contacmePressed) {
    contact_info.classList.remove("collapsed");
    contact_info.classList.add("show");

    contacmePressed = true;
  } else {
    contact_info.classList.add("collapsed");
    contact_info.classList.remove("show");

    contacmePressed = false;
  }

  
console.log('clic');  
}
