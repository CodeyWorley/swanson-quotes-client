import React from 'react';

import Header from './components/header.js';
import Quotes from './components/quotes';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Quotes />
        <Footer />
      </div>
    );
  }
}

export default App;