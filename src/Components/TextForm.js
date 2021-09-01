import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    const upClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const loClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const onChangeText = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myText" value={text} onChange={onChangeText}rows="8"></textarea>
            </div>
            <button className="btn btn-success" onClick={upClick}>Covert to UpperCase</button>
            <button className="btn btn-success mx-2" onClick={loClick}>Covert to LowerCase</button>
        </div>
        <div className="Container my-5">
            <h4>Summery</h4>
            <p>{text.split(" ").length} Words and {text.length} Characters</p> 
            <p>{ 0.008*text.split(" ").length} Minutes to Read (Average)</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}
