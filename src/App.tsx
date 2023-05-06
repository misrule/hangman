import { useState } from "react"
import words from './words.json'
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import HangmanWord from "./components/HangmanWord";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[ Math.floor(Math.random() * words.length) ];
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
     <div className="app">
      <div className="game-status">WIN/LOSE</div>
      <HangmanDrawing/>
      <HangmanWord />
      <Keyboard />
     </div>
  )
}

export default App