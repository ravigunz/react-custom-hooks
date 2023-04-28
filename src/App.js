import React, { useState, useRef } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("teal");
  const [isFocus, setIsFocus] = useState("false");

  const myDivRef = useRef();
  const myInputRef = useRef();

  const handleChangeBgColor = () => {
    myInputRef.current.focus();
  };

  const handleChange = type => {
    switch (type) {
      case 'bgPink':
        myDivRef.current.style.backgroundColor = 'pink';
      break;
      case 'bgTeal':
        myDivRef.current.style.backgroundColor = 'teal';
      break;
      case 'marginL':
        myDivRef.current.style.marginLeft = '100px';
      break;
      case 'marginT':
        myDivRef.current.style.marginTop = '20px';
      break;
      case 'border':
        myDivRef.current.style.border = '2px solid red';
      break;
      case 'borderRadius':
        myDivRef.current.style.borderRadius = '30px';
      break;
      case 'height':
        myDivRef.current.style.height = '80px';
      break;
      case 'width':
        myDivRef.current.style.width = '80px';
      break;

      default:
      return;
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <button onClick={() => handleChange('bgPink')}>Bg Pink</button>
      <button onClick={() => handleChange('bgTeal')}>Bg Teal</button>
      <button onClick={() => handleChange('marginL')}>Margin Left</button>
      <button onClick={() => handleChange('marginT')}>Margin Top</button>
      <button onClick={() => handleChange('border')}>Border</button>
      <button onClick={() => handleChange('borderRadius')}>Border Radius</button>
      <button onClick={() => handleChange('height')}>Height</button>
      <button onClick={() => handleChange('width')}>Width</button>
      <br /> <br />
      <input ref={myInputRef}/>
      <br /> <br />
      <input />
      <br /> <br />
      <div
        ref={myDivRef}
        style={{ width: "100px", height: "100px" }}
      ></div>
    </div>
  );
}
