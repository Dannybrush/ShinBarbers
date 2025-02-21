<script>
    import { Chess } from 'chess.js';
    import { writable } from 'svelte/store';
  
    let chess = new Chess();
    let board = writable(chess.board());
    let turn = writable(chess.turn());
    let selected = null;
    let moves = writable([]);
  
    function selectSquare(square) {
      if (selected) {
        makeMove(selected, square);
        selected = null;
        moves.set([]);
      } else {
        const possibleMoves = chess.moves({ square, verbose: true }).map(m => m.to);
        if (possibleMoves.length > 0) {
          selected = square;
          moves.set(possibleMoves);
        }
      }
    }
  
    function makeMove(from, to) {
      // Check if the move is valid
      const move = chess.move({ from, to });
      if (move) {
        // If valid, update the board and turn
        board.set(chess.board());
        turn.set(chess.turn());
      } else {
        console.error(`Invalid move: ${JSON.stringify({ from, to })}`);
      }
    }
  </script>
  
  <style>
    .chessboard {
      display: grid;
      grid-template-columns: repeat(8, 50px);
      grid-template-rows: repeat(8, 50px);
      border: 2px solid black;
      width: 400px;
    }
    .square {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    .light { background: #f0d9b5; }
    .dark { background: #b58863; }
    .highlight { background: yellow !important; }
  </style>
  
  <div>
    <h2>Turn: {$turn === 'w' ? 'White' : 'Black'}</h2>
    <div class="chessboard">
      {#each $board as row, rowIndex}
        {#each row as square, colIndex}
          <div
            class="square { (rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark' } { $moves.includes(square) ? 'highlight' : '' }"
            on:click={() => selectSquare(square?.square)}
          >
            {square ? square.type.toUpperCase() : ''}
          </div>
        {/each}
      {/each}
    </div>
  </div>
  