import React from 'react'
import popup from './CSS/Popup.css'


function Deletepopup({setShowConfirm,hospitalId,setRefresh}) {
  
  console.log("hospitalId in Delete popup" , hospitalId)

  const deleteHospital = async() =>{
    let url = `http://donka-node.codemeg.com/hospitallist/delete-hospital-by-id/${hospitalId}`
    const response = await fetch(url,{method:"DELETE",});
    const result = await response.json()
    console.log(result);
    console.log(response)
    setRefresh(p=>!p)
  }
  return (
    <>
    <div className="cnf-box">
            <div className='container'>
            {/* <div>Are you sure ?</div> */}
            <div className='head5'>
            <h5 className='delpopup'>Are you sure ?</h5>
            </div>
            
            
            <div className='buttonp'>
            <button className="add" onClick={()=>setShowConfirm(p=>!p)}>Cancel</button>
           
            {/* <button className="cancel" onClick={()=>setShowConfirm(p => !p)}>Cancel</button> */}
            <button className="add" onClick={deleteHospital}>Delete</button>
           

            </div>
            
           
            </div>
      </div>
  
    </>
  )
}

export default Deletepopup