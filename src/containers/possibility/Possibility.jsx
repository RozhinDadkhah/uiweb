import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='gpt__possibility section__padding' id='possibility'>
            <div className='gpt__possibility-image'>
                <img src={possibility} alt='possibility' />
            </div>
            <div className='gpt__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
