import React from 'react'
import { Link } from 'react-router-dom'
function Otp_verify() {
    return (

        <nav className="navbar navbar-expand-lg  fixed-top " style={{ backgroundColor: 'lightskyblue' }}>
            <div className="container">
            <h3 style={{ color: 'white' }} >Kedi</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link to="/">
                        <button type="submit" className="btn btn-primary rounded-pill" style={{ backgroundColor: 'white', color: 'black', fontWeight: '900',borderColor:'white',paddingLeft:20,paddingRight:20 }}>Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav >
   
 


  )
}

export default Otp_verify