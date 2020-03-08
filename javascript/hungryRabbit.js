// Will always be giving a matrix with atleast row and 1 column, and numbers are always positive.
//Values of matrix are number of carrots that the rabit can eat.
// If theres no exact center, then rabit should start at the index with the highest character count. Otherwise, middle elemtn in the matrix.
// At a given point rabit can only move in 4 directions given bounds inside the matrix
  // Up, down, left, right but chooses the one with the most carrots
  // adjacent squares will always be unique so     when moving through the nodes, so choose highest when move direction.
  // No carrots meaning all 4 spots are 0, then rabbits goes to sleep.

  //Thought process: Find the center node. To do this there are two cases. Even matrix where theres not an exact starting node, and a odd matrix wheres theres a exact starting node. Then we have to choose the node next to the starting with the max carrot size looking in all 4 directions. Then move accordingly. We can use bfs queue or just keep changing the regular node so that we can do it in constant space and linear time.
  
  const hungryRabit = (matrix) => {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    let carrots = 0;
    
    // const visited = new Array(rowLen).fill().map(() => new Array(colLen));
    let startX = 0;
    let startY = 0;
    if (rowLen % 2 !== 0 && colLen % 2 !== 0) { // odd matrix
        startX = Math.floor(rowLen/2);
        startY = Math.floor(colLen/2);
    } else { // even matrix
        let tempX = Math.ceil(rowLen/2);
        let tempY = Math.floor(colLen/2);
        console.log(tempX, tempY);
        let newStartingPos = findMostCarrots([tempX,tempY], matrix);
        
        [startX, startY] = newStartingPos
    }
    // const startX = Math.ceil(rowLen/2)
    // const startY = Math.ceil(colLen/2);
    
    let rabbitPos = [startX, startY]

    while (rabbitPos) {
        const [x, y] = rabbitPos;
        carrots += matrix[x][y];
        matrix[x][y] = 0;
        rabbitPos = findMostCarrots(rabbitPos, matrix);
    }
    return carrots;
}

const findMostCarrots = (currPos, matrix) => {
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    
    const [x, y] = currPos;
    let posDirections = [
        [x + 1, y], // right
        [x - 1, y], // left
        [x, y + 1], // top
        [x, y - 1], // bot
        ]
    // let right = [x + 1, y];
    // let left = [x - 1, y];
    // let top = [x, y + 1];
    // let bot = [x, y - 1];
    let maxCarrots = 0;
    let nextPos;
    posDirections.forEach((dir) => {
        const [x, y] = dir;
        if ((x >= 0 && x < rowLen) && (y >= 0 && y < colLen)) {
            if (matrix[x][y] > maxCarrots) {
              console.log(x, y)
              console.log(matrix[x][y])
              maxCarrots = matrix[x][y];
              nextPos = [x, y];
            }
        }
    });
    return nextPos
}


const matrixWithNoExactCenter = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
] // 27

const matrixWithExactCenter = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [5, 3, 5, 6, 8],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
] // 32

// console.log(hungryRabit(matrixWithNoExactCenter));
console.log(hungryRabit(matrixWithExactCenter))