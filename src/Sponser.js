import React from 'react'
import './sponser.scss'
import { Link } from 'react-router-dom';

function sponser() {
  const wing =new URL("./img/wing1.png",import.meta.url);
  const back=new URL("./img/girl-background_image.png",import.meta.url);
  const lulia=new  URL("./img/rottweiler.png",import.meta.url);
  const bitty=new URL("./img/coolen.png",import.meta.url);
  const george=new URL("./img/istockphoto.png",import.meta.url);
  const franklin=new URL("./img/rabit 1.png",import.meta.url);
  return (
    // main div
    <html>
      <div className='background'>

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

      <div className='available'>
        <h4>Pets available for Adoption</h4>
        <div className='lulia'>
          <img src={lulia} alt='dog'></img>
        </div>
        <div className='words'>Lulia  <span>  2yrs</span></div>
        <div className='bitty'>
          <img src={bitty}></img>
        </div>
        <div className='words2'>Bitty <span>  4.5 yrs</span></div>

        <div className='george'>
          <img src={george}></img>
        </div>
        <div className='words3'>george<span>  2.5 yrs</span></div>
        <div className='franklin'>
          <img src={franklin}></img>
        </div>
        <div className='words4'> franklin <span>3 yrs</span></div>
      </div>
      <div className='every'>
        <h3 className='hev'>EVERY PET DESERVES A HOME</h3>
        <h5 className='Bring'>Bringing home a pet is a life-changing experience that only spreads joy and cheer! Take a step forward and help pets start over their lives again, with love that they truly deserve. While every pet deserves a home, we truly believe every household deserves a pet!</h5>
      </div>
      </div>


    </html>
      
  )
}

export default sponser

