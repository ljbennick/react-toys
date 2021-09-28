import React, { Component } from "react";

export default class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ""
        };
    }

    handleChange(val){
        this.setState({ userInput: val })
    };

    splitNums(userInput){
        var arr = userInput.split(',');
        var odds = [];
        var evens = [];

        for(let i=0; i<arr.length; i++){
            if(arr[i]%2 === 0){
                return evens.push(parseInt(arr[i], 10))
            } else {
                return odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds })
    }


    render(){
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button className="confirmationButton" onClick={ () => {this.splitNums(this.state.userInput) }}>Split Numbers</button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
    }
}

