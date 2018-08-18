import React, { Component } from "react"

export default class FilterObject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            unfilteredArray: [
                {name: "Jeremy", javascriptPro: true, age: 19},
                {name: "Jake", likesToYeet: false, age: 19}, 
                {name: "Kaleb", worksOut: true, age: 19}
            ],

            userInput: "",
            filteredArray: []
        }
    }

    updateInput (val) {
        this.setState({
            userInput: val
        })
    }

    solve() {
        const arr = this.state.unfilteredArray.filter((item) => item.hasOwnProperty([this.state.userInput]))
        this.setState({
            filteredArray: arr
        })
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" 
                type="text"
                placeholder="Enter Keyword"
                onChange={(e) => this.updateInput(e.target.value)}
                value={this.state.userInput}/>
                <button className="confirmationButton"
                onClick={() => this.solve()}>Filter</button>
                <span className="resultBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}