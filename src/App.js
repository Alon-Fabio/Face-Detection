import React ,{useState} from 'react';
import Particles from 'react-particles-js';
import Clarifai  from 'clarifai';
import Navigetion from './components/Navigetion/Navigetion';
import Logo from './components/Logo/Logo';
import Fetcher from './components/Fetcher/Fetcher';
import Image from './components/Image/Image';
import Footer from './components/Footer/Footer';
import PicLibrary from './components/PicLibrary/PicLibrary'
import './App.css';

function App() {

  const [FindPic, setFindPic] = useState();
  const [PicUrl, setPicUrl] = useState();
  const [PicArr, setPicArr] = useState([]);

  const app = new Clarifai.App({
    apiKey: '3634fc260367403ca7e2a34a0b974b91'
   });


//Particle is a background, this are his configurations.
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
  async function ChangePicUrl() {
    setFindPic(PicUrl);
    setPicArr(PicArr => [...PicArr, PicUrl])
    console.log(PicUrl);
    console.log(PicArr);
    //API request to Clarefie.
  //   app.models.predict("a403429f2ddf4b49b307e318f00e528b", PicUrl).then(
  //   function(response) {
  //     console.log(response);
  //   },
  //   function(err) {
  //     console.log(err);
  //   }
  // );
  }
  
  return (
    <div className="App">
      <PicLibrary PictureArray={PicArr}/>
      <Particles className="Particles" params={ParticlesParams}/>
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