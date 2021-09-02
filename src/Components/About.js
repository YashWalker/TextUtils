import React from 'react'
import logo from './imgs/linkedin.png'

export default function About(props) {
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>My Name Is Yash and You can Follow me on...</h3>
            <div className="container my-5" >
                <div className="card" style={{width: "18rem"}}>
                    <img src={logo} className="card-img-top" alt="LinkedIn"/>
                    <div className="card-body">
                        <h5 className="card-title">Yash Walker</h5>
                        <a href="https://www.linkedin.com/in/yashwalker/" className="btn btn-primary">follow Me!</a>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}
