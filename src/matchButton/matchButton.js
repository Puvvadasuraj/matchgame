import './matchButton.css'

const MatchButton = props => {
  const {name, change, stateId} = props
  const {displayText, tabId} = name
  const update = () => {
    change(tabId)
  }
  let display = (
    <button type="button" className="itemButton" onClick={update}>
      {displayText}
    </button>
  )
  if (stateId === tabId) {
    display = (
      <button
        type="button"
        className={`itemButton ${'activeContainer'}`}
        onClick={update}
      >
        {displayText}
        <hr className="activeContainer" />
      </button>
    )
  }
  return <li>{display}</li>
}

export default MatchButton
