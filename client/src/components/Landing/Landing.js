import React from 'react';
import styles from './Landing.module.css';

const Landing = () => (
  <div className={styles.LandingContainer}>
    <div>
      <h1><span role='img' aria-label='computer-emoji'>💻</span> Welcome to Fullstack React Boilerplate</h1>
      <h3>Edit <code>client/src/components/App.js</code> and save to reload.</h3>
      <h3>See <code>package.json</code> for the full list of dependencies.</h3>
      <h3>Click <a href='https://github.com/isaac1104/create-react-express'>here</a> for documentation</h3>
    </div>
  </div>
);

export default Landing;