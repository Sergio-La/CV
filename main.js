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

let skillsPressed = false;

btnMode.addEventListener("click", toggleMode);
btnPortfolio[0].addEventListener("click", skills);

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

  if (skillsPressed && btnMode.checked) {
    const skill = document.querySelectorAll(".skill");
    skill.forEach((e) => e.classList.add("skill-dark"));
  } else {
    const skill = document.querySelectorAll(".skill");
    skill.forEach((e) => e.classList.remove("skill-dark"));
  }
}

function skills() {
  //activar la clase de activo
  // if (btnPortfolio[0].classList.contains("portfolio-dark")) {
  //   btnPortfolio[0].classList.toggle("portfolio-dark-active");
  // } else {
  //   btnPortfolio[0].classList.toggle("portfolio-active");
  // }

  console.log(skillsPressed);
  if (!skillsPressed) {
    sectionSkills.innerHTML = `
<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>HTML</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 75%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>CSS</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 70%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>Java Script</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 65%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>Power Automate</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 90%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>Power Apps</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 92%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>Power Virtual Agents</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 75%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>Dataverse</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 65%;"></div>
    </div>
</div>

<div class="skill ${btnMode.checked ? "skill-dark" : ""}">
    <h3>Model Driven</h3>
    <div class="skill-progress">
        <div class="skill-fill" style="width: 60%;"></div>
    </div>
</div>
    `;
    skillsPressed = true;
  } else {
    sectionSkills.innerHTML = "";
    skillsPressed = false;
  }
}
