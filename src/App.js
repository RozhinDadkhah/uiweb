import React from 'react'
import './app.css'
import { Brand, Cta, Navbar, What } from './components'

import { Footer, Blog, Possibility, Features, Header } from './containers'

function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
