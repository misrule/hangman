

const HangmanDrawing = () => {
  const HEAD = <div className="line head"></div>
  const BODY = <div className="line body"></div>
  const LEFT_ARM = <div className="line left-arm"></div>
  const RIGHT_ARM = <div className="line right-arm"></div>
  const LEFT_LEG  = <div className="line left-leg"></div>
  const RIGHT_LEG = <div className="line right-leg"></div>

  return (
    <div className="gallows">
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {RIGHT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div className="line gallows_base"></div>
      <div className="line gallows_post"></div>
      <div className="line gallows_beam"></div>
      <div className="line gallows_rope"></div>
    </div>
  )
}

export default HangmanDrawing