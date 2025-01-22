import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Marvel } from "./components/CharacterDetails";
import { Main } from "./components/Main";
import NavigationBar from "./components/NavigationBar";
import './components/Styles.css';


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Marvel />} />
      </Routes>
    </>
  )
}


export default App;