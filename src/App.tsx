import { useCallback, useEffect, useState } from "react"
import words from './words.json'
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import HangmanWord from "./components/HangmanWord";
import wordDictionary from './words.json';

interface WordDictionary {
  easy: {
    word: string;
    hints: string[];
  }[];
}
// Function to load just the "easy" array
function loadEasyArray(): WordDictionary['easy'] {
  return wordDictionary.easy;
}
const easyWords = loadEasyArray();

// Function to select a random object from the "easy" array using a sophisticated randomization function
function getRandomWord(easyArray: { word: string, hints: string[] }[]): { word: string, hints: string[] } {
  const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % easyArray.length;
  return easyArray[randomIndex];
}


const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const currentWord = getRandomWord(easyWords);
    return currentWord.word.toLowerCase() //getRandomWord(easyWords).word;
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])


    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
        if (!key.match(/^[a-z]$/)) return;
        e.preventDefault();
        addGuessedLetter(key)
      }
      document.addEventListener("keypress", handler);

      return () => {
        document.removeEventListener("keypress", handler);
      }
    }, [guessedLetters]);

  return (
     <div className="app">
      <div className="game-status">
        {isWinner && "You Win!"}
        {isLoser && "You Lose"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <Keyboard 
        disabled={ isWinner || isLoser}
        activeLetters={
        guessedLetters.filter(letter => wordToGuess.includes(letter))
      }
      incorrectLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}/>
     </div>
  )
}

export default App