import React, { Component } from "react";

export default class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    changeNum1(val){
        this.setState({ number1: parseInt(val, 10) })
    }

    changeNum2(val){
        this.setState({ number2: parseInt(val, 10) })
    }

    totalSum(number1, number2){
        this.setState({ sum: number1 + number2 })
    }

    render(){
    return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e) => this.changeNum1(e.target.value)}></input>
            <input className="inputLine" onChange={(e) => this.changeNum2(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.totalSum(this.state.number1, this.state.number2)}>Add</button> 
            <span className="resultsBox">Results: { this.state.sum }</span>
        </div>
    )
    }
}

