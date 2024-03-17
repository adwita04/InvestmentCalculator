import { useState } from "react"

import UserInput from "./components/UserInput"
import Result from "./components/Result"
function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
    annualInvestment: 1200
  })
  function handleInput(newValue,inputType)
  {
        setUserInput({...userInput, [inputType]:newValue})
  }

  return (
    <>
      <UserInput userInput={userInput} handleInput={handleInput}/>
      { userInput.duration > 0? (<Result userInput={userInput} />) : (<h3 className="center">Please enter a valid duration </h3>)}
    </>
  )
}

export default App
