import './matchItem.css'

const MatchItem = props => {
  const {values, change, click} = props
  const {thumbnailUrl} = values
  return (
    <li>
      <button type="button" className="thumbClass" onClick={click}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbImage" />
      </button>
    </li>
  )
}

export default MatchItem
