import React from 'react'
import Otp_verify from './Otp_verify'
import { Link } from 'react-router-dom'
import Loginpic from './Loginpic.jpg'
import Login_d from './CSS/Login_d.css?inline'
function Otp_card() {
  return (
    <div><Otp_verify />
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
                    <h3 className="card-title text-center">OTP Verification</h3>
                    <p>Verification for securtiy purpose</p>
                    <div className='row'style={{marginTop:30}}>
                      <div className='col'>
                      <input type="text" className="square-input" placeholder="0" style={{color:'black'}} />
                      </div>
                      <div className='col'>
                      <input type="text" className="square-input" placeholder="0" style={{color:'black'}} />
                      </div>
                      <div className='col'>
                      <input type="text" className="square-input" placeholder="0" style={{color:'black'}}/>
                      </div>
                      <div className='col'>
                      <input type="text" className="square-input" placeholder="0" style={{color:'black'}}/>
                      </div>
                      
                    </div>

                  </div>
                  <p>Don't Recieve OTP?<a href=''> Resend</a></p>

                  <Link to={"/"}><br />
                    <button type="submit" className="btn btn-primary btn-block">Verify</button>
                  </Link>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Otp_card