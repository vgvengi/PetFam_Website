import React from 'react'
import { Link } from 'react-router-dom';
import './About.scss'
function About() {
  const wing =new URL("./img/wing1.png",import.meta.url);
  return (
    // main div
    <div class="maindiv">
    
    <div class='div'>
      <img className='first_div' src={wing} alt='dog'/>
      <div className='second_div'>

        <Link to={'/home'} className='home'>Home
        </Link>

        <Link to={'/Sponser'} className='home'> Sponser a pet
        </Link>

        <Link to={'/Contact'} className='home'>
      Contact
        </Link>

        <Link to={'/About'} className='home'>
      About us
           </Link>
      </div>
      </div>
      <div className='cat'>
        <h4>Founded in 2019, ThePetFam, is the India’s largest network of 5-star pet care  service providers.</h4>
      </div>
    </div>
  )
}

export default About




