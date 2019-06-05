import React from 'react';
import './bootstrap.min.css';

import Header from './components/Header'

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <Header title="Veterinaria" />
      </div>
    );
  }
}

export default App;
