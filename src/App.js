import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Header_middle from './Components/Header_middle';
import Gallery_api from './Components/Gallery_api';


function App() {
  return (
    <div>
      <Header />
      <Header_middle />
      <Gallery_api />
    </div>
  );
}

export default App;
