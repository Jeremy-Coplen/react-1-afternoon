import React, { Component } from "react"

export default class Palindrome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    updateInput(val) {
        this.setState({
            userInput: val
        })
    }

    solve() {
        const strArr = this.state.userInput.split("")
        const revArr = strArr.reverse()
        const revStr = revArr.join("")

        this.state.userInput === revStr ? this.setState({palindrome: "true"}) : this.setState({palindrome: "false"})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" 
                type="text"
                placeholder="Enter Text"
                onChange={(e) => this.updateInput(e.target.value)}
                value={this.state.userInput}/>
                <button className="confirmationButton"
                onClick={() => this.solve()}>Check</button>
                <span  className="resultsBox">Palindrom: {this.state.palindrome}</span>
            </div>
        )
    }
}