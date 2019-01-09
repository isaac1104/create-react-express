import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34',
        color: '#ffffff',
        textAlign: 'center'
      }
    };

    const Landing = () => (
      <div style={styles.container}>
        <div>
          <h1><span role='img' aria-label='computer-emoji'>💻</span> Welcome to Fullstack React Boilerplate</h1>
          <h3>Edit <code>client/src/components/App.js</code> and save to reload.</h3>
          <h3>Direct the users to <code>/auth/google</code> to authenticate them with Google.</h3>
          <h3>See <code>package.json</code> for the full list of dependencies.</h3>
        </div>
      </div>
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
