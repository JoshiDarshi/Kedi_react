import React from 'react'
import Otp_verify from './Otp_verify'
import { Link } from 'react-router-dom'
import Loginpic from './Loginpic.jpg'
import Login_d from './CSS/Login_d.css?inline'
function Otp_card() {
  const boxShadowStyle = {
    boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)',
    //borderLeft: '4px solid lightskyblue',
    boxSizing: 'border-box'
  };
  
  return (
    <div><Otp_verify />
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
                    <h5 className="h5_c" style={{ letterSpacing: 1, fontWeight: 700 }}>OTP Verification</h5>
                    <p className="pr">Just For Security Purpose</p>
                    <form id="form">
                      <div className="form-group" style={{display:'flex',gap:15}}>
                        
                        <input type="text" id="e1" className="form-control"
                          placeholder="0" style={{height:45,width:50,borderColor:'lightblue',alignItems:'center'}} required />
                           <input type="text" id="e1" className="form-control"
                          placeholder="0" style={{height:45,width:50,borderColor:'lightblue',alignItems:'center'}} required />
                          <input type="text" id="e1" className="form-control"
                          placeholder="0" style={{height:45,width:50,borderColor:'lightblue',alignItems:'center'}} required />
                          <input type="text" id="e1" className="form-control"
                          placeholder="0" style={{height:45,width:50,borderColor:'lightblue',alignItems:'center'}} required />
                          <input type="text" id="e1" className="form-control"
                          placeholder="0" style={{height:45,width:50,borderColor:'lightblue',alignItems:'center'}} required />
                      </div>
                        <div className='content' style={{marginTop:30,textAlign:'center'}}>
                         <p>Don't Recieve OTP ? <span><a href='#'>Resend</a></span></p>
                        </div>
                        <Link to="/otp_card">
                        <button id="submit" className="btn btn-primary" style={{ backgroundColor: 'lightskyblue', width: 310, marginTop: 20, borderColor: 'lightblue' }}>Verify</button>
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
    </div>



  )
}

export default Otp_card