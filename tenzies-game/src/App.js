import {useState} from 'react';
import { Dice, StyledApp } from "./App.styled";
import Die from "./Die";

function App() {

  // state
  const [dice, setDice] = useState(allNewDice())

  // generate random numbers between 1-6
  function allNewDice () {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }

  // mapping over dice array to generate elements for rendering. Using same value as both index & element value

  const diceElements = dice.map(die => <Die value={die}/>)



  return (
    <StyledApp>
      <div className="container">
        <div className="content">
          <h2>Tenzies</h2>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <Dice>
            {diceElements}
          </Dice>
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
