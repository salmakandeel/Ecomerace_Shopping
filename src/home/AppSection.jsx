import React from 'react'
import { Link } from 'react-router-dom';

const AppSection = () => {
    const btnText = "Sign up for free";
    const title = "Shop Anytime and Anywhere";
    const desc = "Take shop on your device with our app & learn all about business what you want. Just download & install & start to learn";
  
  return (
    <div className='app-section padding-tb'> 
        <div className="container">
<div className="section-header text-center">
<Link className='lab-btn mb-4' to="/sign-up">{btnText}</Link>
<h2 className='title'>{title}</h2>
<p>{desc}</p>

</div>
{/* app-wrapper */}
<div className="section-wrapper">
    <ul className='lab-ul'>
        <li><img src="/src/assets/images/app/01.jpg"></img></li>
        <li><img src="/src/assets/images/app/01.jpg"></img></li>

    </ul>
</div>
        </div>
    </div>
  )
}

export default AppSection