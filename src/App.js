import React from "react";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NewPost from "./NewPost";
import { Routes,Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
            <div>
              <h1>Hii</h1>
            </div>
        }/>

        <Route path={'/login'} element={<LoginPage />}/>

        <Route path={'/register'} element={<RegisterPage />}/>

        <Route path={'/newpost'} element={<NewPost />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
