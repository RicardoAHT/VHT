import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <h2 className='about__h2'>Sobre nosotros</h2>
      <div className='about__container'>
        <div className='about__container__div'>
            <h3 className='about__container__h3'>Mision</h3>
            <p className='about__container__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit vero molestiae repellendus ipsum, quaerat ut maxime eveniet voluptatum sequi esse magni molestias placeat aut ratione sint blanditiis exercitationem quas?</p>
        </div>
        <div className='about__container__div'>
            <h3 className='about__container__h3' >Vision</h3>
            <p className='about__container__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis error at ducimus harum fuga enim nam quidem, sapiente aut alias vitae illo quos tempora sequi illum tenetur et consequuntur.</p>
        </div>
      </div>
    </section>
  )
}

export default About
