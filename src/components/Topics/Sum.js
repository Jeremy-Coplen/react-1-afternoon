import React, { Component } from "react"

export default class Sum extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumber1(val) {
        this.setState({
            number1: parseInt(val, 10)
        })
    }

    updateNumber2(val) {
        this.setState({
            number2: parseInt(val, 10)
        })
    }

    solve() {
        const ans = (this.state.number1) + (this.state.number2)

        this.setState({
            sum: ans
        })

        console.log(this.state.sum)
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>

                <input className="inputLine"
                 type="text"
                 placeholder="Enter a Number"
                 onChange={(e) => this.updateNumber1(e.target.value)}
                 value={this.state.number1}/>

                <input className="inputLine" 
                type="text"
                placeholder="Enter a Number"
                onChange={(e) => this.updateNumber2(e.target.value)}
                value={this.state.number2}/>

                <button className="confirmationButton"
                onClick={() => this.solve()}>Add</button>

                <span className="resultsBox">Sum: {this.state.sum} </span>
            </div>
        )
    }
}