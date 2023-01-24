import React, { Component } from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";
import ErrorBoundary from "./Components/ErrorBoundary";


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onChangeSearch = (event) => {
        this.setState({searchField: event.target.value});
        console.log(event.target.value);
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if(!robots.length){
            return(
                <h1> Loading </h1>
            )
        }else{
            return (
                <div className="tc">
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onChangeSearch}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;