import React from "react"
import handshake from '../img/handshake.png'
import truck from '../img/truck.png'
import insurance from '../img/insurance.png'

export function x(data) {
    window.location.hash = data
    window.history.pushState('', document.title, window.location.pathname)
}

function Header() {

    return (
        <div className='header_container'>
            <div className='image_block'>
                <div className='filter'></div>
            </div>
            <div className='navigation'>
                <div className='company_name'>Годонюк Л. В.</div>
                <div className='nav_block'>
                    <button onClick={() => x('#services')} data-replace="Перейти"><span>Послуги</span></button>
                    <button onClick={() => x('#drivers')} data-replace="Перейти"><span>Для перевізників</span></button>
                    <button onClick={() => x('#contacts')} data-replace="Перейти"><span>Контакти</span></button>
                </div>
            </div>
            <div className='achievement_block'>
                <div className='header_text_block'>
                    <div className='header_text'>
                        <h1>Цифрова платформа для вантажоперевезень</h1>
                        <h4>Екосистема обслуговування транспортної логістики <br />Транспортні тендери | Спот-аукціони | TMS | Трекінг вантажів</h4>
                        <button onClick={() => x('#contacts')} className='btn'>Замовити</button>
                    </div>
                </div>
                <div className='achievement_section'>
                    <div className='section'>
                        <img src={handshake} alt='handshake' />
                        <h3>Понад 2 000 перевізників вже працюють у нас</h3>
                    </div>
                    <div className='section'>
                        <img src={truck} alt='truck' />
                        <h3>Понад 50 000 рейсів на рік</h3>
                    </div>
                    <div className='section'>
                        <img src={insurance} alt='insurance' />
                        <h3>Своя служба безпеки</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Header }