import React from 'react'
//import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import Loginpic from './Loginpic.jpg'
import { Link } from 'react-router-dom'
function Forgot() {
  const boxShadowStyle = {
    boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)',
    //borderLeft: '4px solid lightskyblue',
    boxSizing: 'border-box'
  };

  return (
    <section className="main-section">
      <div className="container" style={{ height: 300, marginTop: 60 }}>
        <div className="row">
          <div className="col-md-8 mx-auto" style={{ position: 'relative' }}>
            <div className="card" style={{ borderRadius: 10, marginTop: 45, boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)' }}>
              <div className="row">
                <div className="col-md-6">
                  <img src={Loginpic}
                    width="350px" height="300px" />

                </div>
                <div className="col-md-6 align-items-center">
                  <div className="card-body text-black">
                    <h5 className="h5_c" style={{ letterSpacing: 1, fontWeight: 700 }}>Forgot Password</h5>
                    <p className="pr">Enter Your Email Id</p>
                    <form id="form">
                      <div className="form-group">
                        <label for="email" style={{fontWeight:700}}>Email</label>
                        <input type="email" id="e1" className="form-control"
                          placeholder="Enter your email" style={{height:45,width:310}} required /><br />
                      </div>
                        <Link to="/otp_card">
                        <button id="submit" className="btn btn-primary" style={{ backgroundColor: 'lightskyblue', width: 310, marginTop: 20, borderColor: 'lightblue' }}>Send</button>
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

export default Forgot