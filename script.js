let gridContainerElement = document.querySelector('.grid-container');
let inputElement = document.querySelector('input');
let gridArray = [];
const buttonElement = document.querySelector('button');

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
    checkMouseOnGrid();
  }
}

function checkMouseOnGrid() {
  let gridArray = document.querySelectorAll('.box');
  gridArray.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = 'black';
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
    
  }else {
    buttonElement.innerText = 'Create Grid';
    inputElement.value = '';
  }
}


function eraser() {

}