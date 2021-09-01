import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here")
    const upClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const onChangeText = (event)=>{
        setText(event.target.value)
    }
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myText" value={text} onChange={onChangeText}rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upClick}>Covert to UpperCase</button>
        </div>
    )
}
