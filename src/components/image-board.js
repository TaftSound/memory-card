import ImageCard from './image-card';

import lightbulb from "../images/idea.gif"
import ball from "../images/ball.gif"
import balloons from "../images/balloons.gif"
import burger from "../images/burger.gif"
import fish from "../images/clown-fish.gif"
import fire from "../images/fire.gif"
import home from "../images/home.gif"
import money from "../images/money-bag.gif"
import phone from "../images/phone.gif"
import rocket from "../images/rocket.gif"
import snowflake from "../images/snowflake.gif"
import target from "../images/target.gif"

const imageArray = [[lightbulb, "Light Bulb"], 
                    [ball, "Soccer Ball"], 
                    [balloons, "Balloons"], 
                    [burger, "Burger"], 
                    [fish, "Fish"], 
                    [fire, "Fire"], 
                    [home, "Home"], 
                    [money, "Money"], 
                    [phone, "Phone"], 
                    [rocket, "Rocket"], 
                    [snowflake, "Snowflake"], 
                    [target, "Target"]]

export default function ImageBoard (props) {
  const { order, clickImage, gameWon } = props
  if (gameWon) {
    return <h3>You won the game!</h3>
  }
  const imageItems = order.map((index) => {
    return <ImageCard image={imageArray[index][0]}
                      text={imageArray[index][1]}s
                      clickImage={() => clickImage(index)}
                      key={imageArray[index][1]} />
  })

  return (
    <div className='image-board'>
      {imageItems}
    </div>
  )
}