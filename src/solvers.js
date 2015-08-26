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
      chess.togglePiece(row, col);
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

  var chess = new Board({n:n});
  var rows = chess.rows();
  var solutionCount = 0;

  var boardCreate = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      chess.togglePiece(row, col);
      if (!chess.hasAnyRooksConflicts()) {
        boardCreate(row + 1);
      } // } else {
        // boardCreate(row + 1);
        chess.togglePiece(row, col);
        // below will remove the last piece and allow it to go back up
        // make one choice at the beginning - recurse (go down the tree), then undo the last choice (to allow you to go back up)
        // chess.togglePiece(row, col);
      // }
    }
  }
  boardCreate(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  
  var chess = new Board({n:n});
  var solution = chess.rows();

  var boardCreate = function(row) {
    if (row === n) {
      // chess is being cleared each time we untoggle
      // so we need to copy chess over into a new empty array
      // so that we can return solution
      for (var i = 0; i < solution.length; i++) {
        solution[i] = chess.rows()[i].slice()
      };
      return;
    } else {
      for (var col = 0; col < n; col++) {
        chess.togglePiece(row, col);
        if (chess.hasAnyQueenConflictsOn(row, col)) {
          chess.togglePiece(row, col);
        } else {
          boardCreate(row + 1);
          chess.togglePiece(row, col);
        }
      }
    }
  }
  boardCreate(0);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  
  var chess = new Board({n:n});
  var rows = chess.rows();
  var solutionCount = 0;

  var boardCreate = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      chess.togglePiece(row, col);
      if (!chess.hasAnyQueenConflictsOn(row, col)) {
        boardCreate(row + 1);
      } // } else {
        // boardCreate(row + 1);
        chess.togglePiece(row, col);
        // below will remove the last piece and allow it to go back up
        // make one choice at the beginning - recurse (go down the tree), then undo the last choice (to allow you to go back up)
        // chess.togglePiece(row, col);
      // }
    }
  }
  boardCreate(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

