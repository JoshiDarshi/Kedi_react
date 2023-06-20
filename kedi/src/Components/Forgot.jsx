import React from 'react'
//import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import Loginpic from './Loginpic.jpg'
import { Link } from 'react-router-dom'
function Forgot() {
  return (
    <div className="container-xl custom-container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img src={Loginpic} className="card-img" alt="Login" height={'280px'} width={'650px'} />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-title text-center">Forgot Password</h3>
                  <p>Enter your Email id</p>
                  <form>
                    <div className="form-group">
                      <label className=' label'>Enter your Email</label>
                      <input type="text" className="form-control" placeholder="Email" required />
                      
                    </div>
                    <Link to={"/otp_card"}><br/>
                    <button type="submit" className="btn btn-primary btn-block">Send</button>
                    </Link>
                    
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

export default Forgot