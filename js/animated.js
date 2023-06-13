
const baltika = document.getElementById("baltika");
const bochka = document.getElementById("bochka");
const hiddenMenu = document.getElementById("hidden-menu");
let isHiddenMenu = true


let OnButtonClick = () => {
  hiddenMenu.style.display = isHiddenMenu ? "block" : "none"
  isHiddenMenu = !isHiddenMenu;
  console.log(bcg)
}

let getCenterX=()=>bochka.getBoundingClientRect().left+120;

let getCenterY=()=>bochka.getBoundingClientRect().top+120;


const orbitRadius= 200.0;
let speed = 30,
    step = Math.PI / 90,
    f = 0
function move() {
  f += step
  baltika.style.left = getCenterX()+ orbitRadius * Math.sin(f) + 'px';
  baltika.style.top = getCenterY() + orbitRadius * Math.cos(f) + 'px';
}
setInterval(move, speed)



