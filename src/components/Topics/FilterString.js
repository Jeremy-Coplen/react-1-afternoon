import React, { Component } from "react"

export default class FilterString extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unfilteredArray: ["Jeremy", "Jake", "Kaleb", "Jamece", "Justin", "Jenny", "Jessica", "Wendy"],
            userInput: "",
            filteredArray: []
        }
    }

    updateInput(val) {
        this.setState({
            userInput: val
        })
    }

    solve() {
        const arr = this.state.unfilteredArray.filter((item) => item.includes(this.state.userInput))

        this.setState({
            filteredArray: arr
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" 
                type="text"
                placeholder="Enter Keyword"
                onChange={(e) => this.updateInput(e.target.value)}
                value={this.state.userInput}/>
                <button className="confirmationButton"
                onClick={() => this.solve()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}