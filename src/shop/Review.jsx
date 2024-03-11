import React, { useState } from 'react'
import Rating from '../components/Rating';

const Review = () => {
const reviwtitle = "Add a Review";
let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];
const [reviewShow,setReviewShow]=useState(true)
  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow?"RevActive":"DescActive"}`}>
        <li className='desc' onClick={()=>setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={()=>setReviewShow(!reviewShow)}>Reviews 4</li>
    </ul>
    {/* desc&&review content */}
    <div className={`review-content ${reviewShow?"review-content-show":"description-show"}`}>
      <div className="review-showing">
        <ul className="content ul-lab">
        {
          ReviewList.length>=1&& ReviewList.map((review,i)=>(
            <li key={i}>
 <div className="post-thumb">
  <img src={review.imgUrl}/>
 </div>
 <div className="post-content">
  <div className="entry-meta">
    <div className="posted-on">
      <a href='#'>{review.name}</a>
      <p>{review.date}</p>
    </div>
  </div>
  <div className="entry-content">
    <p>{review.desc}</p>
  </div>
 </div>
            </li>
          ))
        }
        </ul>
        {/* add review field */}
        <div className="client-review">
          <div className="review-form">
            <div className="review-title">
              <h5>{reviwtitle}</h5>
            </div>
            <form className='row'>
             <div className="col-md-4 col-12">
              <input type='text' name='name' placeholder='Full Name*'/>
             </div>
             <div className="col-md-4 col-12">
              <input type='email' name='email' placeholder='Full Email*'/>
             </div>
             <div className="col-md-4 col-12">
              <div className="ratting">
              <span className='me-2'>Your Rating</span>
             <Rating/>
              </div>
             </div>
             <div className="col-12">
            <textarea name="message" rows="8" placeholder='Type Your Message Here....'/>
             </div>
             <div className="col-12">
           <button type="submit" className='default-button'><span>Submit Review</span></button>
             </div>
            </form>
          </div>
        </div>
        <div>

        </div>
      </div>
      {/* description */}
      <div className="description">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, nesciunt, eligendi assumenda quod, adipisci modi culpa vero eos et facilis dolorum sunt iste voluptate delectus. Accusamus esse iste voluptatem magni, at veniam tenetur, impedit quaerat quis enim dolores inventore cupiditate in, dolor error voluptas delectus officia libero autem. Veniam, modi?</p>
       <div className="post-item">
       <div className="post-thumb">
          <img src="/src/assets/images/shop/01.jpg"/>
        </div>
        <div className="post-content">
        <ul className='lab-ul'>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          <li>amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
          <li>amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>amet consectetur adipisicing elit.</li>
        </ul>
       
        </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, nesciunt, eligendi assumenda quod, adipisci modi culpa vero eos et facilis dolorum sunt iste voluptate delectus. Accusamus esse iste voluptatem magni, at veniam tenetur, impedit quaerat quis enim dolores inventore cupiditate in, dolor error voluptas delectus officia libero autem. Veniam, modi?</p>

      </div>
    </div>
    </>
  )
}

export default Review