import React from 'react'
import './nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineExperiment} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

export const Nav = () => {
  return (
    <nav>
    <a href='#'><AiOutlineHome/></a> 
    <a href='#about_me'><AiOutlineUser/></a> 
    <a href='#experience'><AiOutlineExperiment/></a> 
    <a href='#services'><RiServiceLine/></a> 
    <a href='#contact_me'><AiOutlineMessage/></a> 
    </nav>
  )
}

export default Nav;