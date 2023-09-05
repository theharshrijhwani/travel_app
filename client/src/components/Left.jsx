import React from 'react'
import "./style.css";
import icon from "./../assets/usericon.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                <FontAwesomeIcon icon="fa-regular fa-circle-question" />
                Help & get started
            </span>
           <br />
           <span>
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                Logout
           </span>
        </div>
        
    </div>
  )
}

export default Left