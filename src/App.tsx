import { useState } from "react"
import words from './words.json'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[ Math.floor(Math.random() * words.length) ];
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  
  return (
     <h1>{wordToGuess}</h1>
  )
}

export default App