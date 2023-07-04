import React from 'react'
import Header_main from './Header_main'
import profile from './profile.jpeg'
function Myaccount() {
    const boxShadowStyle = {
        boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)',
        //borderLeft: '4px solid lightskyblue',
        boxSizing: 'border-box',
        marginTop:20
      };
     
  return (
    <div><Header_main/>
     <div className='container' style={boxShadowStyle}>
       <div className='user_pic' >
       <img src={profile} height={150}width={150} className='rounded-circle'  style={{border: '2px solid lightskyblue',marginTop:30}}/>
       </div>
       <div className='name_div' style={{display:'flex',gap:30}}>
            <div className='name' style={{marginTop:20}}>
              <h5 style={{fontWeight:600,textAlign:'left'}}>First name</h5>
              <input type='text' placeholder='D@rshi' required style={{borderRadius:5,backgroundColor:'white',textAlign:'center',padding:10,width:300}}/>
              
            </div>
            <div className='name' style={{marginTop:20}}>
              <h5 style={{fontWeight:600,textAlign:'left'}}>Last name</h5>
              <input type='text' placeholder='Admin' required style={{borderRadius:5,backgroundColor:'white',textAlign:'center',padding:10,width:300}}/>
              
            </div>
            </div>
            <div className='name_div' style={{display:'flex',gap:30}}>
            <div className='name' style={{marginTop:20}}>
              <h5 style={{fontWeight:600,textAlign:'left'}}> Mobile Number</h5>
              <input type='number' placeholder='1234323233' required style={{borderRadius:5,backgroundColor:'white',textAlign:'center',padding:10,width:300}}/>
              
            </div>
            <div className='name' style={{marginTop:20}}>
              <h5 style={{fontWeight:600,textAlign:'left'}}>Email</h5>
              <input type='text' placeholder='Admin@gmail.com' required style={{borderRadius:5,backgroundColor:'white',textAlign:'center',padding:10,width:300}}/>
              
            </div>
            
          </div>
          <div className='name_div' style={{display:'flex',gap:10}}>
            <div className='name' style={{marginTop:20}}>
               <button style={{width:500,marginLeft:60,backgroundColor:'lightskyblue',marginBottom:30}}>Update</button>
               </div>  
          </div>
     </div>
    </div>
  )
}

export default Myaccount