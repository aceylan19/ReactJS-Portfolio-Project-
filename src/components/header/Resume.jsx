import React from 'react'
import Resume_AC from '../../assets/Resume_AC.pdf' 

const Resume = () => {
  return (
    <div className='resume'>
    <a href={Resume_AC} download className='btn'> Dowload Resume </a>
    <a href='#contact_me' className='btn btn-primary'> Let's Talk </a>
    </div>
  )
}

export default Resume