import React, { Component } from "react";
import CardList from "./Components/CardList";
import { robots } from './robots';
import SearchBox from "./Components/SearchBox";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }

    onChangeSearch = (event) => {
        this.setState({searchField: event.target.value});
        console.log(event.target.value);
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onChangeSearch}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;