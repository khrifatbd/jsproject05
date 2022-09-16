import React from 'react'
import './profile.style.css'
import Bio from './Bio'
import Skills from './Skills'
import Links from './Links'

const Profile = () => {
 const me={
  name:"kamrul hasan rifat",
  title:"this is title",
  skillA:"javaScript",
  skillB:"PHP",
  skillC:"python"
 }


  return (
    <div className='Container'>
        <Bio name={me.name} title={me.title} />
        <Skills skillA={me.skillA} skillB={me.skillB} skillC={me.skillC} />
        <Links />
    </div>
  )
}

export default Profile