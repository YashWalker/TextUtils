import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    const upClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Text Changed into UpperCase" , "success")
    }
    const loClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Text Changed into LowerCase" , "success")
    }
    const reClick = ()=>{
        let newText= text.split("").reverse().join("");
        setText(newText)
        props.showAlert("Text Reversed" , "success")
    }
    const coClick = ()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!" , "success")
    }
    const clClick = ()=>{
        let newText= "";
        setText(newText)
        props.showAlert("Text Cleared!" , "success")
    }
    const rmClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!" , "success")
    }

    const onChangeText = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myText" value={text} onChange={onChangeText}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={upClick}>Covert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={loClick}>Covert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={reClick}>Reverse the Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={rmClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={coClick}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clClick}>Clear Text</button>
            
        </div>
        <div className="Container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h4>Summery</h4>
            <p>{text.split(" ").length} Words and {text.length} Characters</p> 
            <p>{ 0.008*text.split(" ").length} Minutes to Read (Average)</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}
