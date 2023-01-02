import React from "react"
import Hammer1 from '../img/Hammer1.png'
import Hammer2 from '../img/Hammer2.png'
import TMS from '../img/TMS.png'
import Trekking from '../img/Trekking.png'

function ShortServicesList() {
    return (
        <div className='short_services_list'>
            <h2>Послуги компанії</h2>
            <div className='services_main'>
                <div className='services_section'>
                    <img src={Hammer1} alt='tenders' />
                    <h5>Транспортні тендери</h5>
                    <p>• Прозорість процесів закупівлі.<br />• Автоматизація розподілу обсягів.<br />• Консолідована звітність.<br />• Зберігання результатів та історії торгів.</p>
                </div>
                <div className='services_section'>
                    <img src={Hammer2} alt='auctions' />
                    <h5>Спот-аукціони</h5>
                    <p>• Оперативне закриття термінових перевезень.<br />• Три види аукціонів: на зниження, першої згоди, без стартової ціни.</p>
                </div>
                <div className='services_section'>
                    <img src={TMS} alt='TMS' />
                    <h5>TMS / Система управління перевезеннями</h5>
                    <p>• Фіксація та облік договірних умов.<br />• Автоматизація логістичних процесів.<br />• Можливість налаштування під конкретні завдання.</p>
                </div>
                <div className='services_section'>
                    <img src={Trekking} alt='trekking' />
                    <h5>Трекінг вантажу</h5>
                    <p>Усі види відстеження:<br />• Бортові блоки<br />• GSM-зв'язок<br />•	Мобільний додаток</p>
                </div>
            </div>
            <div className='back_map'></div>
        </div>
    )
}

export { ShortServicesList }