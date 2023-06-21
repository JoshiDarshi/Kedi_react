import React, {useState} from 'react'
import Modal from './CSS/Modal.css?inline'
import Header_main from './Header_main'
import { Button } from 'bootstrap'
import delete_t from './delete_t.jpeg'
import edit from './edit.png'
import 'bootstrap/dist/css/bootstrap.min.css'



function Hospital() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
        <Header_main/>
        <div className="container">
        <div className="row" id='fl'>
          <ul className="col" style={{ listStyleType: 'none', display: 'flex', gap: 600 }}>
            <li>
              <div className='content'>
                <h4 className="text-left" >Hospitals List</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <div className="input-group" style={{display:'flex'}}>
                 <>
                 <button onClick={toggleModal}  className=" btn btn-primary btn-block">Add hospital</button>
                {modal &&(
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <h3>Add Hospital</h3>
                    </div>
                  </div>
                )}
                </>
                </div >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <table class="table table-bordered" style={{marginTop:30}}>
        <thead>
          <tr >
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Id</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Hospitals</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Edit</th>
            <th scope="col" style={{ backgroundColor: 'lightgray' }}>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th >1</th>
            <td style={{ color: 'skyblue' }}>Apolo</td>
            <td ><img src={edit} width={40} height={40} /></td>
            <td ><img src={delete_t} width={50} height={40} /></td>
            </tr>
            <tr>
            <th >2</th>
            <td style={{ color: 'skyblue' }}>CHL</td>
            <td ><img src={edit} width={40} height={40} /></td>
            <td ><img src={delete_t} width={50} height={40} /></td>
            </tr>
            <tr>
            <th >3</th>
            <td style={{ color: 'skyblue' }}>Bombay</td>
            <td ><img src={edit} width={40} height={40} /></td>
            <td ><img src={delete_t} width={50} height={40} /></td>
            </tr>
 
          </tbody>
          </table>
          <div className='main'style={{display:'flex',gap:600}}>
        
     <div className='b-con'>
      <p>showing 1 of 1 pages</p>
     </div>
     <div className='b-rcon' style={{display:'flex',gap:10}} >
      <p>Go to page no.</p>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>1</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}></button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>Previous</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}>Next</button>
      <button className='btn btn primary' style={{backgroundColor:'lightgray'}}></button>
     </div>
    </div>
    </div>
  )
}

export default Hospital