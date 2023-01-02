import React from "react"
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import phone from '../img/phone.png'
import mail from '../img/mail.png'
import map from '../img/map.png'

function Footer() {

    return (
        <div className='footer' id='contacts_us'>
            <div className='basic_data'>
                <div className='us_data'>
                    <h2>Контакти</h2>
                    <div>
                        <img src={phone} alt='phone' />
                        <span>Company Namber</span>
                    </div>
                    <div>
                        <img src={map} alt='' />
                        <span>Company Location</span>
                    </div>
                    <div>
                        <img src={mail} alt='' />
                        <span>Company email</span>
                    </div>
                </div>
            </div>
            <div className='footer_text'>
                <span>&#xa9; Всі права захищені та належать торговій марці Company Name</span>
                <div className='social_block'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='insagram' />
                    <img src={twitter} alt='twitter' />
                </div>
            </div>
        </div>
    )
}

export { Footer }