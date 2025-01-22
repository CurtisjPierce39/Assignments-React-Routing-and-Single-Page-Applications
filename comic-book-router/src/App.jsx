import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Marvel } from "./components/CharacterDetails";
import { Main } from "./components/Main";
import NavigationBar from "./components/NavigationBar";
import './components/Styles.css';
import { Browse } from "./components/browse";
import { Comics } from "./components/comics";


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/:id' element={<Marvel />} />
        <Route path='/comics' element={<Comics />} />
      </Routes>
    </>
  )
}


export default App;