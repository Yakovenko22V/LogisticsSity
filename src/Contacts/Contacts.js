import React from "react"
import BackFon from '../img/BackFon.png'

function Contacts() {

    function clearingForm() {
        document.querySelector('form').reset()
    }

    return (
        <div id='contacts'>
            <div className='contacts_text'>
                <div className='discription'>
                    <h2>Company Name</h2>
                    <p>Це цифрова платформа для перевезення вантажів. Користувачам доступні продукти та сервіси для автоматизації закупівлі та виконання перевезень: транспортні тендери, спот-аукціони, TMS та трекінг. Цифрові продукти Company Name об'єднані в екосистему, інтегровані з ІТ-системами відправників вантажів, дозволяють оптимізувати рутинні процеси і значно знизити витрати на транспортну логістику.</p>
                </div>
                <div className='form_block'>
                    <img src={BackFon} alt='backfon' />
                    <div className='form'>
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
                            <input type="submit" value="Отправить" onClick={clearingForm} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Contacts }