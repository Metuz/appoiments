import React from 'react';
import './bootstrap.min.css';

import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  render(){
    return(
      <div className="container">
        <Header title="Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
