import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductDisplay = ({ product }) => {
    const desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sunt illo fugiat voluptate, illum, culpa nam aut ab harum corrupti officia aliquam cum placeat earum fuga. Dolorum doloribus repellat suscipit?"
    const { name, id, price, ratingsCount, quantity, seller ,img} = product
    const [preQuentity, setPreQuentity] = useState(quantity)
    const [color, setColor] = useState("")
    const [couponCode, setCouponCode] = useState("")
    const [size, setSize] = useState("")
    const sizeArray=["select size",'SM','LG','XL','XXL']
    const colorArray=["select color",'Pink','Black','Green','Blues']

    // func to set size
    const handleSizeChange = (e) => {
        setSize(e.target.value)
        console.log(size);
    }
    // func to set color
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    // func to set quentity
    const handleQuentityChange = (e) => {
        setPreQuentity(e.target.value)
    }
    // func to decrease quentity
    const handleDecrease=()=>{
        
       preQuentity>=0?setPreQuentity(preQuentity-1):null
       console.log(preQuentity);
    }
        // func to increase quentity
    const handleIncrease=()=>{
     setPreQuentity(preQuentity+1)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const product={
            id,name,img,color,size,quantity:preQuentity,couponCode,price
        }
        const exisitingCart=JSON.parse(localStorage.getItem("cart"))||[]
        const exisitingProductIndex=exisitingCart.findIndex((item)=>item.id===id)
        if(exisitingProductIndex!==-1){
            exisitingCart[exisitingProductIndex].quantity+=preQuentity

        }
        else{
            exisitingCart.push(product)
        }
        localStorage.setItem("cart",JSON.stringify(exisitingCart))
        // reset fields
        setPreQuentity(1)
        setSize("")
        setColor("")
        setCouponCode("")
    }
    return (
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className='select-product size'>    
                        <select name={size} onChange={handleSizeChange} >
                            {
                                sizeArray.map((size,i)=>(
                                    <option key={i} value={i+1}>{size}</option>
                                ))
                            }
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className='select-product color'>
                        <select name={color} onChange={handleColorChange}>
                            {
                                colorArray.map((color,i)=>(
                                    <option key={i} value={i+1}>{color}</option>
                                ))
                            }
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart plus minus */}
                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                        <input className="cart-plus-minus-box" name="qtybutton" type='text' value={preQuentity} onChange={e=>setPreQuentity(parseInt(e.target.value),10)} />
                        <div className="inc qtybutton" onClick={handleIncrease}>+</div>
                    </div>
                    {/* coupon field */}
                    <div className="discount-code mb-2">
                        <input type="text" placeholder='Enter discount code' onChange={e=>setCouponCode(e.target.value)} />
                    </div>
                    {/* button section */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to Cart</span>
                    </button>
                    <Link to={"/cart-page"} className='lab-btn bg-primary'>
                        <span>Check out</span>
                    </Link>
                </form>

            </div>
        </div>
    )
}

export default ProductDisplay