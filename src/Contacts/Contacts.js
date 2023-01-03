import React from "react"
import BackFon from '../img/BackFon.png'

function Contacts() {

    function clearingForm() {
        document.querySelector('form').reset()
    }

    return (
        <div className='contacts'>
            <div className='contacts_text'>
                <div className='discription'>
                    <h2>Logistics Company</h2>
                    <p>Це цифрова платформа для перевезення вантажів. Користувачам доступні продукти та послуги для автоматизації закупівлі та виконання перевезень: транспортні тендери, спот-аукціони, TMS та відстеження вантажу. Цифрові продукти Годонюк Л.В. об'єднані в екосистему, інтегровані з ІТ-системами відправників вантажів, дозволяють оптимізувати рутинні процеси та значно знизити витрати на транспортну логістику.</p>
                </div>
                <div className='form_block'>
                    <img src={BackFon} alt='backfon' />
                    <div className='form' id = 'contacts'>
                        <h3>Зв'язатися з нами</h3>
                        <form>
                            <label>
                                <p>Ім'я*</p>
                                <input type="text" placeholder="Повне ім'я" required />
                            </label>
                            <label>
                                <p> Адреса електронної пошти*</p>
                                <input type="text" placeholder="example@gmail.com" required />
                            </label>
                            <label>
                                <p> Компанія*</p>
                                <input type="text" placeholder='ТОВ "ТрансЛюкс"' required />
                            </label>
                            <label>
                                <p> Телефон*</p>
                                <input type="text" placeholder="0 800 21 9295" required />
                            </label>
                            <input type="submit" value="Відправити" onClick={clearingForm} />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { Contacts }