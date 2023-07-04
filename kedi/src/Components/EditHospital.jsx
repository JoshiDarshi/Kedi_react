import React from 'react'
import popup from './CSS/Popup.css'
function EditHospital({setShowConfirm}) {
  return (
    <>
    <div className="cnf-box">
            <div className='container'>
            {/* <div>Are you sure ?</div> */}
            <div className='head5'>
            <h5 className='delpopup'>Edit Hospital</h5>
            </div>
            
            <div className='buttonp'>
                <div className='inpute'>
                <input type='text'/>
                </div>
            <button className="cancel" onClick={()=>setShowConfirm(p => !p)}>Cancel</button>
            <button className="add" >Edit</button>
            </div>
            
            </div>
      </div>
  
    </>
  )
}

export default EditHospital