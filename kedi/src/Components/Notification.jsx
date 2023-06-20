import React from 'react'
import Header_main from './Header_main'

function Notification() {
    return (
        <div><Header_main />
            <div className="container">
                <div className="row" id='fl'>
                    <ul className="col" style={{ listStyleType: 'none', display: 'flex', gap: 600 }}>
                        <li>
                            <div className='content'>
                                <h4 className="text-left" >Notifications List</h4>
                            </div>
                        </li>
                        <li>
              <div className="content">
                <div className="input-group">
                  {/* <input type="text" className="form-control" placeholder="Search" /> */}
                </div >
              </div>
            </li>
                    </ul>
                </div>
            </div>
            <table class="table table-bordered" style={{ marginTop: 30 }}>
                <thead>
                    <tr >
                        <th scope="col" style={{ backgroundColor: 'lightgray' }}>Id</th>
                        <th scope="col" style={{ backgroundColor: 'lightgray' }}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >1</th>
                        <td><dt >User Onboard</dt>
                            <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                            <dd>5 min ago</dd>
                        </td>
                    </tr>
                    <tr>
                        <th >2</th>
                        <td><dt style={{justifyContent:'left'}} >User Onboard</dt>
                            <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                            <dd>8 min ago</dd>
                        </td>
                    </tr>
                    <tr>
                        <th >3</th>
                        <td><dt style={{justifyContent:'left'}} >User Onboard</dt>
                            <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                            <dd>18 min ago</dd>
                        </td>
                    </tr>
                    <tr>
                        <th >4</th>
                        <td><dt style={{justifyContent:'left'}} >User Onboard</dt>
                            <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                            <dd>25 min ago</dd>
                        </td>
                    </tr>
                    <tr>
                        <th >5</th>
                        <td><dt style={{justifyContent:'left'}} >User Onboard</dt>
                            <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                            <dd>1 week ago</dd>
                        </td>
                    </tr>
                    <tr>
                        <th >6</th>
                        <td><dt style={{justifyContent:'left'}} >User Onboard</dt>
                            <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                            <dd>2 week ago</dd>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Notification