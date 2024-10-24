import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text !== ''){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Text converted to upper case" , 'success');
        }
        else{
            props.showAlert('No text ', 'danger');
        }
    }

    const handleLoClick = () => {
        if (text !== ''){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Text converted to upper case" , 'success');
        }
        else{
            props.showAlert('No text ', 'danger');
        }
    }
    
    
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }

    const [text , setText] = useState('');   

    const handleCopy = () => {
        if (text !== ''){
            navigator.clipboard.writeText(text);
            props.showAlert("Text copied to the clipboard" , 'success');
        }
        else{
            props.showAlert('No text in the text box', 'danger');
        }
    }

    const handleExtraSpaces = () => {
        if (text !== ''){
            let newText = text.split(/[ ]+/);
            setText(newText.join(' '));
            props.showAlert("Extra space removed from the text" , 'success');
        }
        else{
            props.showAlert('No text ', 'danger');
        }
    }

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text box is cleared" , 'success');
    }
  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className={`form-control bg-${props.backgroundColor} text-${props.textColor}`} value={text} onChange={handleOnchange}  id="myBox" rows="8" placeholder='Enter Your Text'></textarea>
        </div>
        <div className="container">
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy the text</button>
            <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length - 1 }  words and {text.length} characters</p>
        <p>{0.08 * text.split("").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

  )
}
