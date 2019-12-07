import React from 'react';
import Navigetion from './components/Navigetion/Navigetion';
import Logo from './components/Logo/Logo';
import Fetcher from './components/Fetcher/Fetcher';
import Image from './components/Image/Image';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="TopNav">
        <Logo />
        <Navigetion />
      </div>
      <div className="FetchImageBox">
        <Fetcher />
        <Image />
      </div>
      <Footer />

    </div>
  );
}

export default App;
