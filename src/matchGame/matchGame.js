import {Component} from 'react'
import MatchButton from '../matchButton/matchButton'
import ScoreCard from '../scoreCard/scoreCard'
import MatchItem from '../matchItem/matchItem'
import './matchGame.css'

class MatchGame extends Component {
  state = {
    activeId: 'FRUIT',
    time: 60,
    score: 0,
    display: true,
    matchImg:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  changeId = id => {
    this.setState({
      activeId: id,
    })
  }

  randomImg = event => {
    const {imagesList} = this.props
    const num = Math.ceil(Math.random() * imagesList.length)
    const {matchImg} = this.state
    const checkId = matchImg.id !== event.id
    if (checkId) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchImg: imagesList[num].imageUrl,
      }))
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activeId, time, display, matchImg, score} = this.state
    const filteredList = imagesList.filter(each => each.category === activeId)

    return (
      <>
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="img"
          />
          <div className="scoreBox">
            <p className="score">
              Score:<span className="span">{score}</span>
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt=" timer"
              className="timerImg"
            />
            <p className="span">{time} Sec</p>
          </div>
        </div>
        <div className="mainContainer">
          {display && (
            <div className="bottomContainer">
              <img src={matchImg} alt="match" className="matchImg" />
              <ul className="ulContainer">
                {tabsList.map(each => (
                  <MatchButton
                    name={each}
                    change={this.changeId}
                    stateId={activeId}
                  />
                ))}
              </ul>
              <ul className="imageUl">
                {filteredList.map(eachItem => (
                  <MatchItem values={eachItem} click={this.randomImg} />
                ))}
              </ul>
            </div>
          )}
          {!display && <ScoreCard />}
        </div>
      </>
    )
  }
}

export default MatchGame
