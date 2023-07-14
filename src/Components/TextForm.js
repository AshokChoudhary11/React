import React, {useState} from "react";

export default function TextForm(props){
    const handleupclick = () =>{
        // console.log("upercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloclick = () =>{
        // console.log("Lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearclick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("upercase change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter text here" />
                <button className="btn btn-primary mx-1 my-2" onClick={handleupclick}>convert to Upercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleloclick}>convert to Lovercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleclearclick}>clear Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> word and <b>{text.length}</b> characters</p>
            <p>{0.008 * text.split(" ").length} minuts to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}