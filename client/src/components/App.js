import React, { Component } from 'react';

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

    return (
      <div style={styles.container}>
        <div>
          <h1>Welcome to Fullstack React Boilerplate with <code>Node</code> and <code>Express</code></h1>
          <h3>Edit <code>client/src/components/App.js</code> and save to reload.</h3>
          <h3>You can also authenticate users using Google OAuth by directing them to <code>/auth/google</code></h3>
          <p>Please check inside of the two <code>package.json</code> files to see the list of dependencies that are being used.</p>
        </div>
      </div>
    );
  }
}

export default App;
