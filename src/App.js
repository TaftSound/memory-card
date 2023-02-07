import './App.css';
import React, { useState } from 'react';

import Scoreboard from './components/scoreboard';
import ImageBoard from './components/image-board';

function createRandomOrder () {
  let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  let randomNumArray = []

  for (let i = 0; i < 12; i ++) {
    let index = Math.floor(Math.random() * numArray.length)
    randomNumArray.push(numArray.splice(index, 1)[0])
  }
  
  return randomNumArray
}

function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [order, setOrder] = useState(createRandomOrder())
  const [clicked, setClicked] = useState([])
  const [gameWon, setGameWon] = useState(false)

  const resetGame = () => {
    if (score > bestScore) {
      const newBestScore = score
      setBestScore(newBestScore)
    }
    setScore(0)
    setOrder(createRandomOrder())
    setClicked([])
    setGameWon(false)
  }

  const clickImage = (imageNumber) => {
    let gameOver = false

    clicked.forEach((image) => {
      if (image === imageNumber) {
        resetGame()
        gameOver = true
      }
    })

    if (gameOver) { return }

    const newClickedArray = clicked
    newClickedArray.push(imageNumber)
    setClicked(newClickedArray)
    setScore(score + 1)
    setOrder(createRandomOrder())
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='title-container'>
          <h1>The Memory Game</h1>
          <p>Get points by clicking on an image, but don't click on any more than once!</p>
        </div>
        <Scoreboard score={score} bestScore={bestScore}/>
        <ImageBoard order={order} clickImage={clickImage} gameWon={gameWon}/>
      </div>
    </div>
  );
}

export default App;
