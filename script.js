let gridContainerElement = document.querySelector('.grid-container');
let gridArray = [];

function setGridContainerStyles(size) {
  gridContainerElement.style.cssText = `
  display:grid;
  border:2px solid black;
  width: 400px;
  height: 400px;
  grid-template-columns: repeat(${size}, 1fr);
  `;
}

function createGrid(rows, columns) {
  console.log(gridArray);

  setGridContainerStyles(rows);

  if(gridArray.length === 0) {
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < columns; j++){
        const box = document.createElement('div');
        gridArray.push(box);
      }
    }
    console.log('Grid created of size 5x5');
    return gridArray;
  }
}

function drawGrid() {
  const grid = createGrid(16, 16);
  console.log(grid.length);

  grid.forEach(gridBox => {
    gridContainerElement.appendChild(gridBox);
    gridBox.style.cssText = `
      border: 1px solid black;
      `;
    gridBox.classList.add('box');
  });
  checkMouseOnGrid();
  return grid;
}

function checkMouseOnGrid() {
  let gridArray = document.querySelectorAll('.box');
  console.log(gridArray);

  gridArray.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = 'black';
    });
  });
}