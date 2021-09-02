import React from 'react'

export default function About(props) {
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>My Name Is Yash and You can Follow me on...</h3>
         </div>
        </>
    )
}
