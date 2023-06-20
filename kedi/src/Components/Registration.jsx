import React from 'react'
import Header_main from './Header_main'
import user from './user.jpeg'
function Registration() {
  return (
    <div>
        <Header_main/>
        <div className='container'>
          <h3>Registration</h3>
            <div className='userpic'>
              <img src={user}/>
            </div>
          <div className='Form'>
            <div className='select'>
              <label>Select your type</label><br/>
              <input type='' placeholder='Doctor'/>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default Registration