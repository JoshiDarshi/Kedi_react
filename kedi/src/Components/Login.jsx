import React, { Component } from 'react'
import Loginpic from './Loginpic.jpg'
import Login_d from './CSS/Login_d.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

//import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
function Login() {
  
  return (
    
    <div className="container-xl custom-container ">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img src={Loginpic} className="card-img" alt="Login" height={'320px'} width={'650px'} />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title text-center">Login to Kedi</h2>
                  <form>
                    <div className="form-group">
                      <label className=' label'>Enter Email</label>
                      <input type="text" className="form-control" placeholder="Email" required />
                      
                    </div>
                    <label className='label'>Enter Password</label>
                    <div className="form-group">
                      <input type="password" className="form-control" placeholder="*****" required />
                    </div>
                    <div className='forgot'>
                    <Link to={"/forgot"}>
                           Forgot Password?</Link>
                    </div><br/>
                    <div className="form-group">
                    <Link to={"/patients"}>
                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login