import React from "react"
import Plus from '../img/Plus.png'

function DriversInfo() {

    return (
        <div id='drivers'>
            <div className='drivers_text'>
                <div className='driver_header_text'>
                    <h2>Для перевізників</h2>
                    <a href='#contacts'><button className='btn'>Приєднатися</button></a>
                </div>
                <div className='us_plus'>
                    <div className='plus_block'>
                        <img src={Plus} alt='plus' />
                        <span>Усі власники вантажів на одній платформі – беріть участь в аукціонах та тендерах, отримуйте вигідні замовлення.</span>
                    </div>
                    <div className='plus_block'>
                        <img src={Plus} alt='plus' />
                        <span>Тільки регулярні рейси – наші перевізники заробляють понад 300 000 гривень на рік із кожної машини.</span>
                    </div>
                    <div className='plus_block'>
                        <img src={Plus} alt='plus' />
                        <span>Гарантія завантаження – понад 70 000 рейсів.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DriversInfo }