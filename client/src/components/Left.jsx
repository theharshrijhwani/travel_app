import React from 'react'
import "./style.css";


const Left = () => {
  return (
    <div className='left'>
        <div className='user-icon'>
            <img src={icon} alt="" height={125} width={125}/>
            <br />
        Muskan Tolani
        </div>
        <div className='bt-left'>
            <span>
                
                Help & get started
            </span>
           <br />
           <span>
           <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
                Logout
           </span>
        </div>
        
    </div>
  )
}

export default Left