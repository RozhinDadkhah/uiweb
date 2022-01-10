import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>
                    Do you want to step in to future before others
                </h1>
            </div>

            <div className='gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='gpt3__footer-links'>

                <div className='gpt3__footer-link_div'>
                    <h4>links</h4>
                    <p>overons</p>
                    <p>social media</p>
                    <p>counters</p>
                    <p>contact</p>
                </div>

                <div className='gpt3__footer-link_div'>
                    <h4>company</h4>
                    <p>terms & conditions</p>
                    <p>privacy policy</p>
                    <p>contact</p>
                </div>

                <div className='gpt3__footer-link_div'>
                    <h4>get in touch</h4>
                    <p>123 no-8St -germany</p>
                    <p>123 456 78</p>
                    <p>rozhin@gmail.com</p>
                </div>
            </div>

            <div className='gpt3__footer-copy'>
                <p>2021</p>
            </div>
        </div>
    )
}

export default Footer
