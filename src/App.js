import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState(""); // State for QR code value

  const generateQRCode = () => {
    setQRCodeValue(text);
  }
  const clearInput = () => {
    setText("");
  } 
  
  return (
    <div className='container'>
      <div className="App">
        <p className='headText'>QR CODE<br/> GENERATOR</p>
        <input
          placeholder='Paste your link here'
          className='input'
          type='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />

        <button className='btn' onClick={generateQRCode}>Generate</button>
        <button className='btn' onClick={clearInput}> clear text </button>
        <QRCode
          className='qrcode'
          value={qrCodeValue}
        />
      </div>
    </div>
  );
}

export default App;
