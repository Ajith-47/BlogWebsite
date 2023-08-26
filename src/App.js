import React from "react";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NewPost from "./NewPost";
import { Routes,Route } from "react-router-dom";
import './App.css';
import './HomePage-Content.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <main>
            <div className="Post">
              <div className="Post-image">
                <img src="https://th.bing.com/th/id/OIF.hRNcF4GXOXSYIUTiwlnfJg?pid=ImgDet&rs=1" alt="Error"></img>
              </div>
              <div className="Post-text">
                <h3>Shah Rukh Khan</h3>
                <p>Shah Rukh Khan also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the "Baadshah of Bollywood" and "King Khan",[a] he has appeared in more than 90 films, and earned numerous accolades, including 14 Filmfare Awards... </p>
              </div>
            </div>

            <div className="Post">
              <div className="Post-image">
                <img src="https://th.bing.com/th/id/OIF.hRNcF4GXOXSYIUTiwlnfJg?pid=ImgDet&rs=1" alt="Error"></img>
              </div>
              <div className="Post-text">
                <h3>Shah Rukh Khan</h3>
                <p>Shah Rukh Khan also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the "Baadshah of Bollywood" and "King Khan",[a] he has appeared in more than 90 films, and earned numerous accolades, including 14 Filmfare Awards... </p>
              </div>
            </div>

            <div className="Post">
              <div className="Post-image">
                <img src="https://th.bing.com/th/id/OIF.hRNcF4GXOXSYIUTiwlnfJg?pid=ImgDet&rs=1" alt="Error"></img>
              </div>
              <div className="Post-text">
                <h3>Shah Rukh Khan</h3>
                <p>Shah Rukh Khan also known by the initialism SRK, is an Indian actor and film producer who works in Hindi films. Referred to in the media as the "Baadshah of Bollywood" and "King Khan",[a] he has appeared in more than 90 films, and earned numerous accolades, including 14 Filmfare Awards... </p>
              </div>
            </div>
          </main>
        }/>

        <Route path={'/login'} element={<LoginPage />}/>

        <Route path={'/register'} element={<RegisterPage />}/>

        <Route path={'/newpost'} element={<NewPost />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
