
type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}
const HangmanWord = ({ guessedLetters, wordToGuess}: HangmanWordProps) => {
  
  const isInGuessed = (letter: string) => {
    return guessedLetters.includes(letter)
  }
  
  const letterStyle = (letter: string) => {
    return isInGuessed(letter) ? "show" : "hide";
  }
  
  return (
    <div className="word">
      {
        wordToGuess.split("").map((letter, index) => {

          return (<span className="underline" key={index}>
            <span className={`hidden-letter ${letterStyle(letter)}`}>
              {letter}
            </span>
          </span>)
        })
      
      }
    </div>
  )
}

export default HangmanWord