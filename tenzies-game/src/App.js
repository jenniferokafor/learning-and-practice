import {useState} from 'react';
import { nanoid } from 'nanoid'

import { Dice, StyledApp, StyledButton } from "./App.styled";
import Die from "./Die";

function App() {

  // state
  const [dice, setDice] = useState(allNewDice())

  // generate random numbers between 1-6
  function allNewDice () {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  console.log(dice)

  // mapping over dice array to generate elements for rendering. Using same value as both index & element value

  const diceElements = dice.map(die => 
    <Die 
    key={die.id} 
    value={die.value} 
    isHeld={die.isHeld}
    />
  )

  // create new dice values 
  function rollDice () {
    setDice(allNewDice())
  }

  return (
    <StyledApp>
      <div className="container">
        <div className="content">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <Dice>
            {diceElements}
          </Dice>

          {/* button */}
          <StyledButton onClick={rollDice}>Roll</StyledButton>
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
