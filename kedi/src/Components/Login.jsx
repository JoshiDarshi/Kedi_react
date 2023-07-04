import React, { Component } from 'react'
import Loginpic from './Loginpic.jpg'
import Login_d from './CSS/Login_d.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

//import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
function Login() {
  const boxShadowStyle = {
    boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)',
    //borderLeft: '4px solid lightskyblue',
    boxSizing: 'border-box'
  };
  return (

    <section className="main-section">
        <div className="container" style={{ height: 450,marginTop: 60}}>
            <div className="row">
                <div className="col-md-8 mx-auto"  style={{position: 'relative'}}>
                    <div className="card" style={{borderRadius: 10, marginTop: 45,boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)'}}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={Loginpic}
                                    width="350px" height="370px" />

                            </div>
                            <div className="col-md-6 align-items-center">
                                <div className="card-body text-black">
                                    <h5 className="h5_c" style={{letterSpacing: 1, fontWeight: 800}}>Login to kedi</h5>
                                    <p className="pr">Enter your Login details</p>
                                    <form id="form">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" id="e1" className="form-control"
                                                placeholder="Enter your email" required/><br/>
                                        </div>
                                        <div classname="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" id="p1" className="form-control" placeholder="******"/>
                                        </div>
                                        <div className='forgot_pwd'>
                                          <Link to="Forgot"><a style={{marginLeft:150,color:'black'}}>Forgot Password?</a></Link>
                                        </div>
                                        <Link to="Patients">
                                        <button id="submit" className="btn btn-primary" style={{backgroundColor: 'lightskyblue',width:310,marginTop: 20,borderColor: 'lightblue'}}>Login</button>
                                        </Link>
                                    </form>
                                </div>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        
    </section>
 
  )
}

export default Login