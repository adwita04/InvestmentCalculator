
export default function UserInput({userInput,handleInput})
{
    return (
        <section id="user-input">
            <div className="input-group" >
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event)=> handleInput(event.target.valueAsNumber,"initialInvestment")}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event)=> handleInput(event.target.valueAsNumber,"annualInvestment")} />
                </p>
            </div>
            <div className="input-group" >
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event)=> handleInput(event.target.valueAsNumber,"expectedReturn")}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event)=> handleInput(event.target.valueAsNumber,"duration")}/>
                </p>
            </div>
        </section>
    )
}