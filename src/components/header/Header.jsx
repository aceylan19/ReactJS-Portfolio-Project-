import React from 'react'
import './header.css'
import Resume from './Resume'
import Photo from '../../assets/Photo.png'
import HeaderSocial from './HeaderSocial'
import {BsArrowDownSquare} from 'react-icons/bs'


const Header = () => {
  return (
    <header>
    <div className='container'>
      <h5> Hello I'm </h5>
      <h1> Aleyna Ceylan </h1>
      <h5 className='text-light'> Frontend Developer, Data Analyst, Robotics Software Engineer</h5>

      <Resume />

      <div className='photo'>
        <img src={Photo} alt="Photo" />
      </div>

      <HeaderSocial />
      
      <a href='#contact_me' className='scroll__down'> <BsArrowDownSquare/> </a>

    </div>


    </header>
  )
}

export default Header;

