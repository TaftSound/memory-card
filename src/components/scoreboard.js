
export default function Scoreboard (props) {
  return (
    <div className='scoreboard'>
      <h3>Current Score: {props.score}</h3>
      <h3>Best Score: {props.bestScore}</h3>
    </div>
  )
}