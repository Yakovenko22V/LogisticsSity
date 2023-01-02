import React from "react"
import handshake from '../img/handshake.png'
import truck from '../img/truck.png'
import insurance from '../img/insurance.png'

function Header() {

    return (
        <div className='header_container'>
            <div className='image_block'>
                <div className='filter'></div>
            </div>
            <div className='navigation'>
                <div>Company Name</div>
                <div className='nav_block'>
                    <a href='#services'>ПОСЛУГИ</a>
                    <a href='#drivers'>ДЛЯ ПЕРЕВІЗНИКІВ</a>
                    <a href='#contacts_us'>КОНТАКТИ</a>
                </div>
            </div>
            <div className='achievement_block'>
                <div className='header_text_block'>
                    <div className='header_text'>
                        <h1>Цифрова платформа для вантажоперевезень</h1>
                        <h4>Екосистема сервісів транспортної логістики <br />Транспортні тендери | Спот-аукціони | TMS | Трекінг вантажів</h4>
                        <button className='btn'><a href='#contacts'>Спробувать</a></button>
                    </div>
                </div>
                <div className='achievement_section'>
                    <div className='section'>
                        <img src={handshake} alt='handshake' />
                        <h3>Понад 2 000 перевізників вже працюють із нами</h3>
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