
const baltika = document.getElementById("baltika");
const hiddenMenu = document.getElementById("hidden-menu");
let isHiddenMenu=true

let OnButtonClick=() => {
  hiddenMenu.style.display= isHiddenMenu? "block":"none"
  isHiddenMenu=!isHiddenMenu
}

