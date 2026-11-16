/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

const photoList = document.getElementById("photo-list");
const counter = document.querySelector("#total em");

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

photoList.addEventListener("click", (event) => {
  // Cible l'élément <li> parent même si l'utilisateur clique sur l'<img>
  const listItem = event.target.closest("li");

  if (!listItem) return;

  // Ajoute ou retire la classe 'selected'
  listItem.classList.toggle("selected");

  // Met à jour le compteur avec le nombre d'éléments sélectionnés
  const selectedCount = photoList.querySelectorAll("li.selected").length;
  counter.textContent = selectedCount;
});
