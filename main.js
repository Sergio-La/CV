const body = document.body;
/*checkbox mode*/
const btnMode = document.querySelector("#mode");
/*texto con el nombre*/
const textName = document.querySelector(".name");
/*texto con el nombre*/
const textTitle = document.querySelector(".title");
/*botón del portafolio*/
const btnPortfolio = document.querySelector("#portfolio");
/*botón de las skills*/
const btnSkills = document.querySelector("#skills");
/*sección del protafolio*/
const projectsSkillsFlex = document.querySelector(".projects-skills-flex");

btnMode.addEventListener("click", toggleMode);
btnPortfolio.addEventListener("click", seePortfolio);
btnSkills.addEventListener("click", seeSkills);

/*Función para el selector de modo*/
function toggleMode() {
  body.classList.toggle('body-dark');
  textName.classList.toggle('name-dark');
  textTitle.classList.toggle('title-dark');
}

function seePortfolio() {
  console.log("click");
}

function seeSkills() {
  console.log("click");
}
