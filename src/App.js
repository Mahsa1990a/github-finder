import React, { Component } from 'react';
import './App.css';

//For now for learning class based component we're gonna start with it:

class App extends Component {
  render() {

    //to see how does it look like without JSX with using straight javascript:
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello From React'));

    const name = 'Mahsa';

    const foo = () => 'Bar';
    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()}</h1>
        <h1>Hello {foo()}</h1>
      </div>
    );
  }
}

export default App;
