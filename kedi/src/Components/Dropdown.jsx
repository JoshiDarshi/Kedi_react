import React from 'react'

function Dropdown() {
  return (
    <div>
            
            <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#action1">
          Action 1
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#action2">
          Action 2
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#action3">
          Action 3
        </a>
      </div>
    </div>
            </div>
  )
}

export default Dropdown