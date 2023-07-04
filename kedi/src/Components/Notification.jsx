import React from 'react'
import Header_main from './Header_main'

function Notification() {
    const boxShadowStyle = {
        boxShadow: '4px 4px 8px 4px rgba(135, 206, 250, 1)',
        //borderLeft: '4px solid lightskyblue',
        boxSizing: 'border-box',
        margin: '0 auto',
    };
    return (
        <div><Header_main />
            <div className="container" style={{marginTop:90}}>
                <div className="row" id='fl'>
                    <h3 style={{ textAlign: 'left', zIndex: 10, marginTop: 50 }}>Notifications List</h3>



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
                                    <dd style={{color:'gray',fontSize:'small'}}>5 min ago</dd>
                                </td>
                            </tr>
                            <tr>
                                <th >2</th>
                                <td><dt style={{ justifyContent: 'left' }} >User Onboard</dt>
                                    <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                                    <dd style={{color:'gray',fontSize:'small'}}>8 min ago</dd>
                                </td>
                            </tr>
                            <tr>
                                <th >3</th>
                                <td><dt style={{ justifyContent: 'left' }} >User Onboard</dt>
                                    <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                                    <dd style={{color:'gray',fontSize:'small'}}>18 min ago</dd>
                                </td>
                            </tr>
                            <tr>
                                <th >4</th>
                                <td><dt style={{ justifyContent: 'left' }} >User Onboard</dt>
                                    <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                                    <dd style={{color:'gray',fontSize:'small'}}>25 min ago</dd>
                                </td>
                            </tr>
                            <tr>
                                <th >5</th>
                                <td><dt style={{ justifyContent: 'left' }} >User Onboard</dt>
                                    <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                                    <dd style={{color:'gray',fontSize:'small'}}>1 week ago</dd>
                                </td>
                            </tr>
                            <tr>
                                <th >6</th>
                                <td><dt style={{ justifyContent: 'left' }} >User Onboard</dt>
                                    <dd>test sss you wants to Onboard on the portal as a doctor</dd>
                                    <dd style={{color:'gray',fontSize:'small'}}>2 week ago</dd>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Notification