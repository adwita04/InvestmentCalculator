import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Result({userInput}){
    const results = calculateInvestmentResults(userInput)
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment
    return(
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            {
                results.map((result)=>{
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                    const investedCapital = result.valueEndOfYear - totalInterest;
                    return (
                        <tbody>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tbody>
                    )
                })
            }

        </table>
    )
}