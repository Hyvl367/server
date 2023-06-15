let shuffle=(array)=>array.sort((a, b) => 0.5 - Math.random());

let randomize=(max,min=1)=>(Math.floor(Math.random() * (max - min) + min));

let getCenterOfEl=(elem)=>{
  let el=elem.getBoundingClientRect();
  return {
    centerX: (el.left + el.right) / 2,
    centerY: (el.top + el.bottom) / 2
  };
}


const baltika = document.getElementById("baltika");
const bochka = document.getElementById("bochka");
const hiddenMenu = document.getElementById("hidden-menu");
const planets = document.getElementsByClassName('planet');


const planetSizes=shuffle(['planet-small','planet-middle', 'planet-large']);
const planetSkines=shuffle(['mars-skin', 'cloudly-skin', 'red-skin', 'lava-skin', 'mer-skin']);
const planetAnimations=shuffle(['p_rotate','p_ant_rotate']);
const spawnRad=100;

let points=[];

let setPlanets=()=>Array.from(planets).forEach((x,i)=> {

  let spawn=()=>({
    x:(randomize(70)+10).toString(),
    y:(randomize(70)+10).toString()
  });

  let isOkSpawn=(newPoint,oldPoint)=>{
    debugger
    let result=true//(Math.pow(newPoint.x-oldPoint.x)+Math.pow(newPoint.y-oldPoint.y)>=Math.pow(spawnRad));
    
    return result
  }

  let checkAndSpawn=()=>{
    let isOk;
    let point;
    let center;
    if (points.length<=0) return spawn();
    else{
      while(true){
        isOk=true;
        point=spawn();
        points.forEach(x=>{
          if (!isOkSpawn(point,x)) isOk=false;
        });
        if (isOk) break;
      }
      return point;
    }
  }


  let classN=planetSkines[i];
  x.classList.add(classN);

  let size=planetSizes[randomize(2,0)];
  x.classList.add(size);

  let spawnPoint=spawn()//checkAndSpawn();

  x.style.left=(spawnPoint.x).toString()+'%';
  x.style.top=(spawnPoint.y).toString()+'%';

  x.style["-webkit-animation-duration"]=randomize(100,10)+'s';
  x.style["-webkit-animation-name"]=shuffle(planetAnimations)[0];

  points.push(getCenterOfEl(x));


 
});



let isHiddenMenu = true


let OnButtonClick = () => {
  hiddenMenu.style.display = isHiddenMenu ? "block" : "none"
  isHiddenMenu = !isHiddenMenu;
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

setPlanets();
setInterval(move, speed)




