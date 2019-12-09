import React ,{useState} from 'react';
import Particles from 'react-particles-js';
import Navigetion from './components/Navigetion/Navigetion';
import Logo from './components/Logo/Logo';
import Fetcher from './components/Fetcher/Fetcher';
import Image from './components/Image/Image';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  const [FindPic, setFindPic] = useState();
  const [PicUrl, setPicUrl] = useState();

  const ParticlesParams = {
      "particles": {
          "number": {
              "value": 200
          },
          "size": {
              "value": 2
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }

  function GetInput(e) {
    setPicUrl(e.target.value);
  }
  function ChangePicUrl() {
    setFindPic(PicUrl);
    console.log(PicUrl);
  }

  return (
    <div className="App">
      <Particles className="Particles" 
      params={ParticlesParams}
      />
      <div className="TopNav">
        <Logo />
        <Navigetion />
      </div>
      <div className="FetchImageBox">
        <Fetcher GetInput={GetInput} ChangePicUrl={ChangePicUrl}/>
        <Image Pic={FindPic}/>
      </div>
      <Footer />

    </div>
  );
}

export default App;


//https://portal.clarifai.com/apps/eab75b70ccdc4bfcac46d05f84204d88 API
//face detection -> clarifai