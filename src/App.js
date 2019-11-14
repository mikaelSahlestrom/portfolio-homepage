import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Body from './containers/Body/Body'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
