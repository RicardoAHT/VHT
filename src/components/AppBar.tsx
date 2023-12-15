import React from 'react'

const AppBar = () => {
  return (
    <nav className='appBar'>
      <ul className='appBar__ul'>
        <li className='appBar__ul__li'>Inicio</li>
        <li className='appBar__ul__li'>Sobre nosotros</li>
        <li className='appBar__ul__li'>Servicios</li>
        <li className='appBar__ul__li'>Contactanos</li>
      </ul>
      <img className='vht__logo' src="/images/LogoVHT-min.png" alt="Logo VHT" />
    </nav>
  )
}

export default AppBar
