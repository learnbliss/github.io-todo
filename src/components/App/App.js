import React from 'react';
import './App.css';
import TodoList from '../TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: error})
    }

    render() {
        if (this.state.error) {
            return <h1>{this.state.error.message}</h1>;
        }
        return (
            <div className="App">
                <TodoList/>
            </div>
        );
    }
}

export default App;
