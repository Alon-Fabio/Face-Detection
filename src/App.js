import React ,{useState,useEffect} from 'react';
import Particles from 'react-particles-js';
import Clarifai  from 'clarifai';
import Navigetion from './components/Navigetion/Navigetion';
import Logo from './components/Logo/Logo';
import Fetcher from './components/Fetcher/Fetcher';
import Image from './components/Image/Image';
import Footer from './components/Footer/Footer';
import PicLibrary from './components/PicLibrary/PicLibrary';
import UserInfo from './components/UserInfo/UserInfo';
import './App.css';

function App() {

  const [FindPic, setFindPic] = useState();
  const [PicUrl, setPicUrl] = useState();
  const [PicArr, setPicArr] = useState([]);
  const [FaceBoxs, setFaceBoxs] = useState([]);
  const [UserInfoObj, setUserInfoObj] = useState({UserName:"",NumberOfUp:0});

  const app = new Clarifai.App({
    apiKey: '3634fc260367403ca7e2a34a0b974b91'
   });


//Particle is a background, this are his configurations.
//This started to raise errors...
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
  };

  function GetInput(e) {
    setPicUrl(e.target.value);
  };

  function UpdateFaceBox(Boxs) {
    setFaceBoxs((prevFaceBoxs)=>[prevFaceBoxs = Boxs]);
  };

  function ShowFaceBoxes() {
    console.log(FaceBoxs);
  };  
  
  function ChangePicUrl() {
    setFindPic(PicUrl);
    setPicArr(PicArr => [...PicArr, PicUrl])
  };

        // API request to Clarefie.
  useEffect(()=>{
        if (PicArr.length !== 0) {
          app.models.predict("a403429f2ddf4b49b307e318f00e528b", PicUrl).then(
          function(response) {
            if (response.status.code !== 10000) {
              console.log("10000");
              alert('somthing went wrong.. please check your URL and try again');
            }
            const ApiBounding_box = response.rawData.outputs[0].data.regions;
            const Boxs = ApiBounding_box.map((BoxPoints)=>{
              return ([
               BoxPoints.region_info.bounding_box.top_row,
               BoxPoints.region_info.bounding_box.left_col,
               BoxPoints.region_info.bounding_box.bottom_row,
               BoxPoints.region_info.bounding_box.right_col
             ]);
           });
            UpdateFaceBox(Boxs);
          },
          function(err) {
            console.log(err);
          }
        ).catch(err=>console.log(err));}
  },[PicArr]);

  const ob = {
    UserName: "Avi",
    NumberOfUp:1
  }
  return (
    <div className="App">
      {PicArr.length !== 0 ?<div><PicLibrary PictureArray={PicArr}/>
      <Particles className="Particles" params={ParticlesParams}/></div>: <div></div>}
      <div className="TopNav">
      {PicArr.length === 0 ?<Logo />:<Logo style={{Zindex: -1}}/>}
        <UserInfo UserInfoObj={UserInfoObj}/>
        <Navigetion ShowFace={ShowFaceBoxes}/>
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