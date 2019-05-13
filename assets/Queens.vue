  <template>
    <div id="container">
    <div class="presentation">
      <p>
        How would you place 8 queens on a chess board, in a way
        that none of them can touch each others ?<br>
        How many solutions can there be ?<br>
        Test any value here !
      </p>
    </div>

    <div>
      <button class="button__board-size-change" @click="smallerBoard()">Smaller board</button>
      <button class="button__board-size-change" @click="biggerBoard()">Bigger board</button>
    </div>

    <div>
      <p class="label">Number of rows :</p>
      <input @blur=controlValues() v-model.number="numberRows" value="8" size="2">
      <p class="label">(1 to 26)</p>
    </div>

    <div class="element-input">
      <p class="label">Number of columns :</p>
      <input @blur=controlValues() v-model.number="numberCols" value="8" size="2">
      <p class="label">(1 to 26)</p>
    </div>

    <div class="element-input">
      <p class="label">Number of queens :</p>
      <input v-model.number="numberQueensToPlace" value="8" size="2">
      <p class="label">(currently placed: {{ this.numberQueensPlaced }})</p>
    </div>

    <div class="element-input">
      <p class="label">Visualization delay (ms, can be changed live) :</p>
    </div>
    <div>
      <input v-model.number="delay" value="20" size="2">
      <button @click="delay = 0">No delay</button>
      <button @click="delay = 30">Small delay</button>
      <button @click="delay = 500">Big delay</button>
    </div>

    <div class="element-input">
      <input type="checkbox" value="check" v-model="enableFlash">
      <label for="check">Flash when find a solution &#9888; EPILEPSY RISK &#9888;</label>
    </div>

    <button id="start" @click="start()">Count Queens Solutions</button>

    <div class="alert" v-show="alertImpossible">
      <p>
        ⚠ You have more queens than you have rows or columns,<br>
        there won't be any possible solutions !<br>
        (but the algorithm tries anyway, for fun.)
      </p>
    </div>

    <h3>Solutions found: {{ this.solutionCounter }}</h3>

    <div>
      <button id="stop" @click="stop()">Stop</button>
      <button id="reset" @click="reset()">Reset</button>
    </div>

    <table id="chess_board" cellpadding="0" cellspacing="0">

      <template v-for="nRow in numberRows">
        <tr :key="nRow">
          <td v-bind:class="{smaller_cases: isSmaller}"><a class="link-case" v-bind:class="{smaller_cases: isSmaller}"
              href="#">{{ numberRows + 1 - nRow }}</a></td>
          <template v-for="nCol1 in numberCols">
            <td :key="nCol1" v-bind:class="{smaller_cases: isSmaller}"
              v-bind:id="`${iterateOverAlphabet(nCol1)}${numberRows + 1 - nRow }`">
              <a :key="nCol1" class="link-case"
                v-bind:class="{smaller_cases: isSmaller}" href="#"></a></td>
          </template>
        </tr>
      </template>

      <tr>
        <td v-bind:class="{smaller_cases: isSmaller}"><a class="link-case" v-bind:class="{smaller_cases: isSmaller}"
            href="#"></a></td>
        <template v-for="nCol2 in numberCols">
          <td :key="nCol2" v-bind:class="{smaller_cases: isSmaller}"><a class="link-case" v-bind:class="{smaller_cases: isSmaller}"
              href="#">{{ iterateOverAlphabet(nCol2) }}</a></td>
        </template>
      </tr>

    </table>
    <div class="presentation">
      <h3>This algorithm use Recursive Backtracking !</h3>
      <p>
        This means we actually test all possibles solutions recursively from the end. Neat !<br>
        You can see the backtrack in action here☝<br>
        Increase delay to better see the algorithm trying to place queens !<br>
        2019, by Samuel Faure (<a href="https://github.com/Samuelfaure">Code on Github !</a>)
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EightQueens',
    data: function () {
      // Returning part of data from function to reset easily this part
      const data = Object.assign(
        { isSmaller: false },
        this.initialState()
      )
      return data
    },
    computed: {
      maxRowIndex: function () { return this.numberRows - 1 },
      maxColIndex: function () { return this.numberCols - 1 }
    },
    methods: {
      initialState: function () {
        return {
          numberRows: 8,
          numberCols: 8,
          solutionCounter: 0,
          delay: 20,
          enableFlash: false,
          numberQueensToPlace: 8,
          numberQueensPlaced: 0,
          alertImpossible: false,
          forceStop: false
        }
      },
      reset: function () {
        this.stop()
        Object.assign(this.$data, this.initialState());
      },
      stop: function () {
        this.forceStop = true
      },
      start: async function () {
        // We can start again
        this.forceStop = false
        // Displaying alert if impossible
        this.checkIfImpossible()
        // Creating the board
        let board = [...Array(this.numberRows)].map(x =>
          [...Array(this.numberCols)].map(x => 0)
        )
        await this.solveQueens(board)
      },
      checkIfImpossible: function () {
        if ((this.numberQueensToPlace > this.numberCols) ||
          (this.numberQueensToPlace > this.numberRows)) {
          this.alertImpossible = true
        } else {
          this.alertImpossible = false
        }
      },
      solveQueens: async function (board) {
        this.solutionCounter = 0

        // The original algorithm have numberCols <=> numberQueensToPlace
        // We want cases where there are more queens
        // so we repeat on extra columns
        // We add 1 for the normal case
        let columnsToTry = this.numberCols + 1 - this.numberQueensToPlace

        for (let i = 0; i < columnsToTry; i++) {
          await this.solveQueensColumn(board, i)
        }

        if (this.forceStop) {
          this.solutionCounter = `Stopped process with ${this.solutionCounter} solutions !`
        } else if (this.solutionCounter === 0) {
          this.solutionCounter = 'No possible solutions !'
        } else {
          this.solutionCounter = `${this.solutionCounter} solutions !`
        }
      },
      solveQueensColumn: async function (board, col) {
        if (this.forceStop) {
          return true
        }
        // If we're at last column or no more queens to place, solution found
        if (this.numberQueensPlaced === this.numberQueensToPlace) {
          await this.updateSolutionCounter()
          return true
        }
        // Check all rows on this column
        let counterRow = 0
        let result = false

        while (counterRow <= this.maxRowIndex) {
          if (this.isSafe(board, counterRow, col)) {
            // Place queen on board
            board[counterRow][col] = 1
            await this.placeQueenVisual(counterRow, col)
            this.numberQueensPlaced++
            // result becomes true if any placement is possible
            result = await this.solveQueensColumn(board, col + 1) || result
            // Backtracking
            board[counterRow][col] = 0
            await this.removeQueenVisual(counterRow, col)
            this.numberQueensPlaced--
          }
          counterRow++
        }

        // No solution I guess
        return result
      },
      // Check if we can place the queen
      isSafe: function (board, row, col) {
        return (
          this.isSafeLeftSide(board, row, col) &&
          this.isSafeUpperLeftDiagonal(board, row, col) &&
          this.isSafeDownLeftDiagonal(board, row, col)
        )
      },
      // Check row on left side
      isSafeLeftSide: function (board, row, col) {
        let counterCol = 0

        while (counterCol < col) {
          if (board[row][counterCol] === 1) {
            return false
          }
          counterCol++
        }
        return true
      },
      // Check upper diagonal on left side
      isSafeUpperLeftDiagonal: function (board, row, col) {
        while ((col >= 0) && (row >= 0)) {
          if (board[row][col] === 1)
            return false
          col--
          row--
        }
        return true
      },
      // Check down diagonal on left side
      isSafeDownLeftDiagonal: function (board, row, col) {
        while ((col >= 0) && (row <= this.maxRowIndex)) {
          if (board[row][col] === 1)
            return false
          col--
          row++
        }
        return true
      },
      placeQueenVisual: async function (row, col) {
        const placementId = this.computePlacementId(row, col)
        await this.sleep(this.delay)
        // Black queen html code: &#9818
        document.getElementById(placementId).firstChild.innerHTML = '&#9818'
        return true
      },
      removeQueenVisual: async function (row, col) {
        const placementId = this.computePlacementId(row, col)
        await this.sleep(this.delay)
        document.getElementById(placementId).firstChild.innerHTML = ''
        return true
      },
      computePlacementId: function (row, col) {
        const letterBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

        const letter = letterBoard[col]
        const number = this.maxRowIndex + 1 - row

        return `${letter}${number}`
      },
      updateSolutionCounter: async function () {
        this.solutionCounter++
        await this.flashScreen()
      },
      flashScreen: async function () {
        if (this.enableFlash) {
          document.body.style.backgroundColor = 'cyan'
          await this.sleep(30)
          document.body.style.backgroundColor = 'white'
        }
        return true
      },
      sleep: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      },
      // For letters on dynamic board
      iterateOverAlphabet(number) {
        number = ((number - 1) % 26)

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        return alphabet[number]
      },
      // Control that we have min 1 max 26 input
      controlValues() {
        if (this.numberRows > 26) {
          this.numberRows = 26
        }
        if (this.numberRows < 1) {
          this.numberRows = 1
        }
        if (this.numberCols > 26) {
          this.numberCols = 26
        }
        if (this.numberCols < 1) {
          this.numberCols = 1
        }
      },
      smallerBoard() {
        this.isSmaller = true;
      },
      biggerBoard() {
        this.isSmaller = false;
      }
    },
    // Might crash if no guard clause here
    updated() {
      if (this.numberRows > 100)
        this.numberRows = 26
      if (this.numberCols > 100)
        this.numberCols = 26
      if (this.numberQueensToPlace > 1000)
        this.numberQueensToPlace = 1000
    }
  }
</script>
<style scoped>
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .presentation {
    text-align: center;
    margin-bottom: 20px;
  }

  .alert {
    text-align: center;
    color: red;
  }

  .smaller_cases {
    height: 15px !important;
    width: 15px !important;
    font-size: 22px !important;
    padding: 3px !important;
  }

  .button__board-size-change {
    margin: 6px;
    background-color: grey;
    /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: 1px solid black;
    cursor: pointer;
  }

  p {
    display: inline;
  }

  .element-input {
    margin: 6px 0 6px 0;
  }

  #start {
    margin: 16px;
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border: 1px solid black;
    cursor: pointer;
  }

  #reset {
    margin: 6px;
    background-color: rgb(226, 187, 114);
    /* Green */
    border: none;
    color: white;
    padding: 12px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border: 1px solid black;
    cursor: pointer;
  }

  #stop {
    margin: 6px;
    background-color: rgb(245, 113, 26);
    /* Green */
    border: none;
    color: white;
    padding: 12px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border: 1px solid black;
    cursor: pointer;
  }

  .link-case {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 50px;
    position: relative;
    text-decoration: none;
    text-shadow: 0 1px #fff;
    width: 50px;
  }

  #chess_board {
    border: 5px solid #333;
  }

  #chess_board td {
    background: #fff;
    background: -moz-linear-gradient(top, #fff, #eee);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), to(#eee));
    box-shadow: inset 0 0 0 1px #fff;
    -moz-box-shadow: inset 0 0 0 1px #fff;
    -webkit-box-shadow: inset 0 0 0 1px #fff;
    height: 60px;
    text-align: center;
    vertical-align: middle;
    width: 60px;
  }

  #chess_board tr:nth-child(odd) td:nth-child(even),
  #chess_board tr:nth-child(even) td:nth-child(odd) {
    background: #ccc;
    background: -moz-linear-gradient(top, #ccc, #eee);
    background: -webkit-gradient(linear, 0 0, 0 100%, from(#ccc), to(#eee));
    box-shadow: inset 0 0 10px rgba(0, 0, 0, .4);
    -moz-box-shadow: inset 0 0 10px rgba(0, 0, 0, .4);
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, .4);
  }
</style>
