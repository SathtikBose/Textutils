import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
    <div>
      <Navbar title="TextUtils" backgroundColor={backgroundColor} textColor={textColor} toggleMode={toggleMode} />
      <Alert alertMsg={alert} />
      <TextForm heading="Try TextUtils" backgroundColor={backgroundColor} textColor={textColor} showAlert={showAlert} />
    </div>
  );
}

export default App;
