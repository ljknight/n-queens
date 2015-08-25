/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var chess = new Board({n:n});
  var solution = chess.rows();

  for (var row = 0; row < solution.length; row++) {
    for (var col = 0; col < solution[row].length; col++) {
      solution[row][col] = 1;
      if (chess.hasAnyRooksConflicts()) {
        chess.togglePiece(row, col)
      }
    }
  }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other








window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  for (var row = 0; row < 4; row++) {
    var chess = new Board({n:4});
    var solution = chess.rows();

    var column = 0;

    //assign 1
    var firstCase = solution[0][0] = 1;

    var innerFunc = function() {
      var innerCol = 0;
      for (var i = 0; i < n; i++) {
        if (!chess.hasAnyRooksConflicts()) {
          chess.togglePiece(rowSquare, colSquare)      
        }
      }
    };





  //   for (var row = 0; row < solution.length; row++) {
  //     for (var col = 0; col < solution[row].length; col++) {
  //       solution[row][col] = 1;
  //       if (chess.hasAnyRooksConflicts()) {
  //         chess.togglePiece(row, col)
  //     }
  //   }
  // }

  for loop with max of n 
    create a new board
    place your first piece at position a1
    inner function ()
      check for conflict at each box after a1
      if no conflict
        place the next available piece
        recursion for next piece

      if (continue this until you hit the nth piece on the Board
      when you do:
        increment counter++
          increment the col++
        do it again
        until col === n // or n -1
        return;
      return count   






  var newBoard = function() {
    chess = new Board({n:4});
    this.solution = chess.rows();
    this.children = [];
  };

  var parentBoard = new newBoard();

  var boardCreate = function() {
    
    // base case
      // if we hit the bottom right side
        // return 

    var childBoard = new newBoard();
    
    for (var row = 0; row < childBoard.solution.length; row++) {
      for (var col = 0; col < childBoard.solution[row].length; col++) {
        childBoard.solution[row][col] = 1;
        if (chess.hasAnyRooksConflicts()) {
          chess.togglePiece(row, col)
        }
      }
    }
    parentBoard.children.push(childBoard);
    return parentBoard
  };

  console.log(boardCreate()) 











  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


















