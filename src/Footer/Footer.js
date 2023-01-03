import React from "react"
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import phone from '../img/phone.png'
import mail from '../img/mail.png'
import map from '../img/map.png'

function Footer() {

    return (
        <div className='footer'>
            <div className='basic_data'>
                <div className='us_data'>
                    <h2>Контакти</h2>
                    <div>
                        <img src={phone} alt='phone' />
                        <span>097 648 20 36<br />098 816 18 52</span>
                    </div>
                    <div>
                        <img src={map} alt='' />
                        <span>Київ, Шота Руставеллі 13</span>
                    </div>
                    <div>
                        <img src={mail} alt='' />
                        <span>Для перевізників<br />margarita.zadvirna@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='footer_text'>
                <span>&#xa9; Всі права захищені та належать торговій марці Годонюк Л.В.</span>
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