import React, { Component } from "react";

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            foods: [
            {
                name: 'Apple',
                type: 'Fruit',
                flavor: 'mild',
                amount: 1  
            },
            {
                name: 'Broccoli',
                flavor: 'mild',
                color: 'green'
            },
            {
                name: 'Lime',
                type: 'Fruit',
                amount: 5
            }
            ],
            userInput: "",
            filteredFoods: [] 
        }
    }

handleChange(val) {
    this.setState({ userInput: val })
}

filterFoods(prop) {
    var foods = this.state.foods;
    var filteredFoods = [];

    for (let i=0; i<foods.length; i++){
        if(foods[i].hasOwnProperty(prop)){
            filteredFoods.push(foods[i])
        }
    }
    this.setState({ filteredFoods: filteredFoods })
}

    render(){
    return(
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText"> Before: { JSON.stringify(this.state.foods, null, 10) }</span>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.filterFoods(this.state.userInput)}>Filter</button>
            <span className="resultsBox filterObjectRB">After: {JSON.stringify(this.state.filteredFoods, null, 10)}</span>
        </div>
    )
    }
}

