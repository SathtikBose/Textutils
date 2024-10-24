import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [backgroundColor, setbackgroundColor] = useState('white'); 
  const [textColor, settextColor] = useState('black'); 

  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null); // Remove alert after 3 seconds
    }, 3000);
  };

  const toggleMode = () => {
    if (backgroundColor === 'white') {
      setbackgroundColor('black');
      settextColor('white')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success');
    } 
    else {
      setbackgroundColor('white');
      settextColor('black')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" backgroundColor={backgroundColor} textColor={textColor} toggleMode={toggleMode} />
      <Alert alertMsg={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Try TextUtils" backgroundColor={backgroundColor} textColor={textColor} showAlert={showAlert} />} />
          <Route path="/about" element={<About backgroundColor={backgroundColor} textColor={textColor} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
