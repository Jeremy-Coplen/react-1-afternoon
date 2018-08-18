import React, {Component} from "react"

export default class EvenAndOdd extends Component {
    constructor(props) {
        super(props)

        this.state = {evenArray: [], oddArray: [], userinput: ""}
    }

    updateInput(val) {
        this.setState({
            userinput: val
        })
    }

    solve() {
        const arr = this.state.userinput.split(",")
        const evenArr = arr.filter((num) => num % 2 === 0)
        const oddArr = arr.filter((num) => num % 2 === 1)

        this.setState({
            evenArray: evenArr,
            oddArray: oddArr
        })
    }

    
    render() {
        
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" 
                type="text"
                onChange={(e) => this.updateInput(e.target.value)} 
                value={this.state.userinput}/>
                <button className="confirmationButton"
                onClick={() => this.solve()}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}