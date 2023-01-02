import React from "react"

function InfoBox(props) {

    const { icon, title, parahraf1, parahraf2, parahraf3, parahraf4, parahraf5 } = props.item

    return (
        <div className='info_box'>
            <h2>{title}</h2>
            <div>
                <p>{parahraf1}</p>
                <p>{parahraf2}</p>
                <p>{parahraf3}</p>
                <p>{parahraf4}</p>
                <p>{parahraf5}</p>
            </div>
            <button className='btn'>Спробувать</button>
            <div className='frame'>
                <img src={icon} alt='atr' />
            </div>
        </div>
    )
}

export { InfoBox }