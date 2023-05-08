const KEYS: string[] = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  incorrectLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({disabled, activeLetters, incorrectLetters, addGuessedLetter}: KeyboardProps) => {
  return (
    <div className="keyboard">
    {KEYS.map(key => {
      const isActive = activeLetters.includes(key)
      const isInactive = incorrectLetters.includes(key)

      return (
        <button key={key} 
        onClick={() => addGuessedLetter(key)} 
        className={`btn ${isActive ? 'active' : ''}`}
        disabled = { isInactive || isActive || disabled}>{key}</button>
      )
    })}
    </div>
  )
}

export default Keyboard