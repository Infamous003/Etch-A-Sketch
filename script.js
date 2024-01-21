let gridContainerElement = document.querySelector('.grid-container');
let inputElement = document.querySelector('input');
let gridArray = [];
const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', drawGrid());
inputElement.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    drawGrid();
  } 
});

function getGridSizeFromUser() {
  let size = (inputElement.value % 2 == 0)? inputElement.value : (inputElement.value + 1);
  return size;
}

function setGridContainerStyles(size) {
  gridContainerElement.style.cssText = `
  display:grid;
  border:2px solid black;
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
    return gridArray;
  }
}

function drawGrid() {
  const grid = createGrid(getGridSizeFromUser()) || null;
  gridContainerElement.innerHTML = '';
  setGridContainerStyles(getGridSizeFromUser());
  
  if(grid !== null){
    grid.forEach(gridBox => {
      gridContainerElement.appendChild(gridBox);
      gridBox.style.cssText = `
        border: 1px solid black;
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