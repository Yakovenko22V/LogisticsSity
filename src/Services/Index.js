import React from "react"
import { InfoBox } from "./InfoBox"
import { ShortServicesList } from "./ShortServicesList"
import Frame1 from '../img/Frame1.png'
import Frame2 from '../img/Frame2.png'
import Frame3 from '../img/Frame3.png'
import Frame4 from '../img/Frame4.png'

export const dataBasic = [
    { icon: Frame1, title: 'Транспортні тендери', parahraf1: 'Забезпечимо контроль та виконання бюджету у ТМС.', parahraf2: 'Найсильніший аналітичний модуль.', parahraf3: 'Єдиний наскрізний процес «Закупівлі-виконання».', parahraf4: 'Незалежність ухвалених рішень.', parahraf5: 'Робота тільки з перевіреними перевізниками.' },
    { icon: Frame2, title: 'Спот-аукціони', parahraf1: 'Замінюємо пошту та месенджери.', parahraf2: 'Усі торги компанії в одному місці.', parahraf3: 'Закрийте палаючий рейс у пару кліків.', parahraf4: 'Чіткий контроль кола учасників.', parahraf5: 'Різні типи аукціонів під будь-яку ситуацію.' },
    { icon: Frame3, title: 'TMS / Система управління перевезеннями', parahraf1: 'Контролює всі етапи від закупівлі до оплати.', parahraf2: 'Безкоштовна інтеграція продуктів до екосистеми ТМС.', parahraf3: 'Відстеження статусу замовлення онлайн.', parahraf4: 'Контроль документообігу.', parahraf5: 'Оперативна обробка відхилень.' },
    { icon: Frame4, title: 'Трекінг вантажу', parahraf1: 'Інтеграція з ERP-системою клієнтів.', parahraf2: 'Автоматизація розподілу замовлень.', parahraf3: 'Відстеження зміни статусів.', parahraf4: 'Можливість гнучкого налаштування.', parahraf5: 'Аудит логістичних процесів.' },
]

function Services() {

    return (
        <div id='services'>
            <ShortServicesList />
            {
                dataBasic.map(item => <InfoBox key={item.title} item={item} />)
            }
        </div>
    )
}

export { Services }