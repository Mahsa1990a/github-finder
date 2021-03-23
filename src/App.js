import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';

import './App.css';

//For now for learning class based component we're gonna start with it:

class App extends Component {

  render() {

    //to see how does it look like without JSX with using straight javascript:
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello From React'));

    // const name = 'Mahsa';
    // const loading = false;
    // const showName = true;

    // if(loading) {
    //   return <h4>Loading...</h4>
    // }

    return (
      <div className="App">
        {/* { loading ? <h4>Loading ...</h4> : <h1>Hello { showName && name }</h1>}   */}

        <Navbar />
      </div>
    );
  }
}

export default App;
