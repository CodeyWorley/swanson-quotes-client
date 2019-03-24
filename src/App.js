import React from 'react';

import Header from './components/header.js';
import SwansonQuotes from './components/swanson-quotes';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='bg-img' />
        <Header />
        <SwansonQuotes />
        <Footer />
      </div>
    );
  }
}

export default App;