

const HangmanWord = () => {
  const word = "test"
  return (
    <div className="word">
      {
        word.split("").map((letter, _) => {
          return <span className="underline">{letter}</span>
        })
      }
    </div>
  )
}

export default HangmanWord