import React from 'react'
import'./Home.scss'
import { Link } from 'react-router-dom';
function Home() {
  const wing =new URL("./img/wing1.png",import.meta.url);
  const dog=new URL("./img/dog 1.png",import.meta.url);
  return(
    <html className='main'>
      <div>
      {/* This is 1st div */}
    <div class="div">
      <img  className="first_div"src={wing} alt='doghand'/>
      <div className='second_div'>
        <Link to={'/home'} className='home'>
      Home
        </Link>
        <Link to={'/Sponser'} className='home'> 
      Sponser a pet
        </Link>
        <Link to={'/Contact'} className='home'>
      Contact
        </Link>
        <Link to={'/About'} className='home'>
      About us
           </Link>
      </div>
    </div>
    <div className='he'>
      <h5 className='getfamily'>Get your family a new member</h5>
      <h6 className='getfamily2'>Open your doors and hearts to pets in need of a home and it will be thankful to you for the rest of their lives.</h6>
      <img className='dog' src={dog} alt='dog'/>
      <button class="explore">Explore
         {/* ======================================================================== */}
      {/* Explore arrow swg */}
      <svg  xmlns="http://www.w3.org/2000/svg" width="91" height="44" viewBox="0 0 91 44" fill="none" >
  <g clip-path="url(#clip0_8_7)">
    <path d="M67.9411 15.2886L67.9345 20.6572L7.57362 20.5832L7.56923 24.1623L67.9301 24.2363L67.9235 29.605L83.0225 22.4653L67.9411 15.2886Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_8_7">
      <rect width="42.9491" height="90.5414" fill="white" transform="translate(90.594 1) rotate(90.0703)"/>
    </clipPath>
  </defs>
</svg>
            {/* ----------------------------------------------------------------- */}

      </button>
      <div class="number0">
        <h5 class='five'>544</h5>
        <h5 className='seven'>756</h5>
        <h5 class='four'>422</h5>
        <h5 className='waiting'>Waiting for home</h5>
        <h5 className='last'>Adopted last year</h5>
        <h5 className='res'>Rescued</h5>
        </div> 
       </div>
      </div>
      </html>
  )

}

export default Home