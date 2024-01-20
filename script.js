let gridContainerElement = document.querySelector('.grid-container');
gridContainerElement.style.cssText = `
display:grid;
border:1px solid black;
width: ${16*20}px;
height: ${16*20}px;
grid-template-columns: 20px 20px 20px 20px 20px 20px 20px 20px
20px 20px 20px 20px 20px 20px 20px 20px;
grid-template-rows: 20px 20px 20px 20px 20px 20px 20px 20px
20px 20px 20px 20px 20px 20px 20px 20px;
`;

function createGrid() {
  let gridArray = [];
  console.log(gridArray);

  if(gridArray.length === 0) {
    for(let i = 0; i < 16; i++){
      for(let j = 0; j < 16; j++){
        const box = document.createElement('div');
        gridArray.push(box);
      }
    }
    console.log('Grid created of size 5x5');
    return gridArray;
  }else {
    gridArray = null;
  }
}

function drawGrid() {
  const grid = createGrid();
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

  // gridArray.forEach((box) => {
  //   box.addEventListener('click', box.style.backgroundColor = 'black');
  // });
}