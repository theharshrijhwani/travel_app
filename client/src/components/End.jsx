import React from 'react';
import './style.css';
import Ticker from 'react-ticker';

const End = () => {
  return (
    <>
    <div className='end-top'>
        <h3 className='name'>Notifications</h3>
        <div className='cont'>
            No upcoming trips!
        </div>

    </div>
    <div className='end-mid'>
        <h3 className='name'>Wishlist</h3>
        <div className='cont'>
            Taj Santacruz
        </div>
        <div className='cont'>
            Karjat
        </div>
        <div className='cont'>
            Villa Le Reve
        </div>
    </div>
    <div className='end-bottom'>
        <h3 className='name'>Upcoming Activities</h3>
        <div className="ticker">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
        {/* Add more items as needed */}
      </div>
    </div>
    </>
  )
}

export default End