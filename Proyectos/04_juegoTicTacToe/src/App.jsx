import { useState } from 'react'

const TURNS = {
  x: 'x',
  o: 'o'
}

const COMBOS_WINNER = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [8, 4, 0]
]

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)

  const handleClick = (index) => {
    updateBoard(index)
  }

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  const checkWinner = (newBoard) => {
    for (const combo of COMBOS_WINNER) {
      const [a, b, c] = combo
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main>
      <h1 className='text-center text-4xl font-bold py-4'>Tic Tac Toe</h1>
      <p className='text-center text-lg font-medium mb-8'>Andres Eduardo Rosas Alpiri</p>
      <section className='w-80 h-80 mx-auto bg-black grid grid-cols-3 grid-rows-3 gap-1'>
        {
          board.map((_, index) => (
            <div
              className='bg-white w-full h-full grid place-items-center font-bold text-2xl'
              key={index}
              onClick={() => handleClick(index)}
            >
              {board[index]}
            </div>
          ))
        }
      </section>
      <button
        onClick={handleResetGame}
        className='mx-auto block mt-5 py-2 px-4 bg-black border-2 border-black rounded-full text-white font-medium text-lg transition-all hover:bg-white hover:text-black'
      >
        Reset game
      </button>
      {
        winner &&
          <article
            className='mt-5 text-center font-medium text-xl w-60 mx-auto p-2 border-2 rounded-xl border-black'
          >
            <p>Ganó el jugador <span className='text-4xl font-bold block'>{winner}</span></p>
          </article>
      }
    </main>
  )
}

export default App
