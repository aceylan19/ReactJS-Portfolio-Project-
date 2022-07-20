import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href='linkedin.com/in/aleynaceylan' taget="_blank"><AiOutlineLinkedin/></a>
    <a href='github.com/aceylan19' taget="_blank"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocial 