import React from 'react'

const ContactUs = () => {
  return (
    <form className='contactUs'>
        <h2>Contactanos</h2>
        <div className='contactUs__container'>
            <div>
                <label >Nombre</label>
                <input type="text" />
            </div>
            <div>
                <label >Email</label>
                <input type="text" />
            </div>
        </div>
        <div className='contactUs__container'>
            <div>
                <label >Telefono</label>
                <input type="text" />
            </div>
            <div>
                <label >Direccion</label>
                <input type="text" />
            </div>      
        </div>
        <div>
            <label >Asunto</label>
            <input type="text" />
        </div>
        <div>
            <label >Mensaje</label>
            <textarea></textarea>
        </div>

    </form>
  )
}

export default ContactUs
