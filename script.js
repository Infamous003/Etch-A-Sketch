let gridContainerElement = document.querySelector('.grid-container');
let inputElement = document.querySelector('input');
let gridArray = [];
const buttonElement = document.querySelector('.create-grid');
let eraserbtn = document.querySelector('.eraser-btn');
let rainbowbtn = document.querySelector('.rainbow-btn');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Include max by adding 1 to the range
}

rainbowbtn.addEventListener('click', () => {
  checkMouseOnGrid(true);
  if(rainbowbtn.style.backgroundColor !== 'rgb(40, 40, 40)'){
    rainbowbtn.style.backgroundColor = 'rgb(40, 40, 40)';
    eraserbtn.style.backgroundColor = null;
    eraserbtn.style.fontSize = null;
  }else{
    rainbowbtn.style.backgroundColor = null;
    eraserbtn.style.backgroundColor = null;
    eraserbtn.style.fontSize = null;
    checkMouseOnGrid(false);
  }
});

eraserbtn.addEventListener('click', () => {
  if(eraserbtn.style.backgroundColor !== 'rgb(40, 40, 40)'){
    eraserbtn.style.backgroundColor = 'rgb(40, 40, 40)';
    eraserbtn.style.fontSize = '1.5rem';
    rainbowbtn.style.backgroundColor = null;
    isEraserOn();
  }else{
    eraserbtn.style.backgroundColor = null;
    eraserbtn.style.fontSize = null;
    checkMouseOnGrid();
  }
});

buttonElement.addEventListener('click', () => {
  drawGrid();
  toggleButton();
});
inputElement.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    drawGrid();
    toggleButton();
  } 
});

function getGridSizeFromUser() {
  let size = (inputElement.value % 2 == 0)? inputElement.value : (+inputElement.value + +1);
  console.log('Input value: '+inputElement.value);
  return size;
}

function setGridContainerStyles(size) {
  gridContainerElement.style.cssText = `
  display:grid;
  width: 400px;
  height: 400px;
  grid-template-columns: repeat(${size}, 1fr);
  grid-template-rows: repeat(${size}, 1fr);
  `;
}

function createGrid(rows) {
  
  if(gridArray.length === 0) {
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < rows; j++){
        const box = document.createElement('div');
        gridArray.push(box);
      }
    }
    return gridArray;
  }else {
    gridArray.splice(0, gridArray.length);
    gridContainerElement.innerHTML = '';
    return gridArray;
  }
}

function drawGrid() {
  const grid = createGrid(getGridSizeFromUser()) || null;
  setGridContainerStyles(getGridSizeFromUser());
  
  
  if(grid !== null){
    grid.forEach(gridBox => {
      gridContainerElement.appendChild(gridBox);
      gridBox.style.cssText = `
        border: 0.001rem solid rgba(0,0,0,0.2);
        `;
      gridBox.classList.add('box');
      
    });
    checkMouseOnGrid(false);
  }
}

function checkMouseOnGrid(rainbowMode = false) {
  let gridArray = document.querySelectorAll('.box');
  let red, blue, green;
  gridArray.forEach((box) => {
    // console.log(red + ' ' + blue + ' ' + green);
    box.addEventListener('mouseenter', () => {
      if(rainbowMode === true){
        // 
        red = getRandomIntInclusive(0, 255);
        blue = getRandomIntInclusive(0, 255);
        green = getRandomIntInclusive(0, 255);
        box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        console.log(typeof box.style.backgroundColor);
      }else {
        box.style.backgroundColor = `black`;
      }
    });
  });
}

// function isMouseLeftClickDown() {
//   let gridArray = document.querySelectorAll('.box');
//   gridArray.forEach((box) => {
//     box.addEventListener('mousedown', () => {
//       box.classList.remove('box');
//     });
//   })
//   return false;
// }

function toggleButton() {
  if(buttonElement.innerText === 'Create Grid') {
    buttonElement.innerText = 'Delete Grid';
    eraserbtn.style.backgroundColor = null;
    rainbowbtn.style.backgroundColor = null;
  }else {
    buttonElement.innerText = 'Create Grid';
    inputElement.value = '';
    eraserbtn.style.backgroundColor = null;
    eraserbtn.style.fontSize = null;
    rainbowbtn.style.backgroundColor = null;
  }
}

function isEraserOn() {
  let gridArray = document.querySelectorAll('.box');
  gridArray.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = null;
    });
  });
}