import React from 'react';
import MainPage from './pages/MainPage';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Toaster 
          position="top-center"
          reverseOrder={false}
          />
        </div>
      <MainPage/>
    </div>
  );
}

export default App;
