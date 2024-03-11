import React, { useEffect, useState } from 'react'
import PageHeader from "../components/PageHeader"
import { Link } from 'react-router-dom'
import delImgUrl from "../../src/assets/images/shop/del.png"
import CheckoutPage from './CheckoutPage'
import "../components/model.css"
const CartPage = () => {
  console.log(
    JSON.parse(localStorage.getItem("cart"))
  );
  const [cartItems, setcartItems] = useState([])
  useEffect(() => {
    // fetch items from localstorage
    const storedcartItems = JSON.parse(localStorage.getItem("cart")) || []
    setcartItems(storedcartItems)

  }, [])

  // calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity
  }
  // handle quantity increase
  const quantityIncrease = (item) => {
    item.quantity += 1
    setcartItems([...cartItems])
    // update localstorage with new cart item
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }
  // handle quantity decrease
  const quantityDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1
      setcartItems([...cartItems])
      // update localstorage with new cart item
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }
  // remove cartItem from local storage
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
    // update new cart
    setcartItems(updatedCart)
    updateLocalStorage(updatedCart)
  }
  // update local storage
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  //  cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item)

  }, 0)
  // order total
  const orderTotal = cartSubtotal
  return (
    <div><PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {
                    cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className='product-item cat-product'>
                          <div className='p-thumb'>
                            <Link to="/shop"><img src={item.img} /></Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>

                          </div>
                        </td>
                        <td className='cat-price'>$ {item.price}</td>
                        <td className='cat-quantity'>
                          <div className="cart-plus-minus">
                            <div className='dec qtybutton'
                              onClick={() => quantityDecrease(item)}>-</div>
                            <input type='text' className='cart-plus-minus-box'
                              name="qtybutton" value={item.quantity}
                            />
                            <div className='inc qtybutton' onClick={() => quantityIncrease(item)}>+</div>
                          </div>
                        </td>
                        <td className='cat-toprice'>
                          $ {calculateTotalPrice(item)}

                        </td>
                        <td className='cat-edit'>
                          <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} />
                          </a>
                        </td>

                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            {/* cart top ends */}
            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className='coupon'>
                  <input type="text" name="coupon" id="coupon" className='cart-page-input-text' placeholder='Coupoun code .....' />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className='cart-checkout'>
                  <input type="submit" value="Update cart" />
                  <CheckoutPage/>
                </form>
              </div>
              {/* checkout box end */}
              {/* shooping-box */}
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">

                        <select>
                          <option value="Egypt">Egypt</option>
                          <option value="England">England</option>
                          <option value="Franch">Franch</option>
                          <option value="German">German</option>
                          <option value="India">India</option>
                        </select>
                        <span className='select-icon'><i className='icofont-rounded-down'></i></span>
                      </div>
                      <div className="outline-select shipping-select">
                          <select>
                            <option value="cairo">Cairo</option>
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                            <option value="Berlin">Berlin</option>
                            <option value="India">New Delhi</option>
                          </select>
                          <span className='select-icon'><i className='icofont-rounded-down'></i></span>
                        </div>
                        <input type="text" name="postalcode" id="postalcode"  placeholder='postalcode/ZIP*' className='cart-page-input-text'/>
                     <button type='submit'>update Address</button>
                      </div>
                    </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className='lab-ul'>
                        <li>
                          <span className='pull-left'>Subtotal</span>
                          <p className='pull-right'>${cartSubtotal}</p>
                        </li>
                        <li>
                          <span className='pull-left'>Shipping and Handling</span>
                          <p className='pull-right'>Free Shipping</p>
                        </li> 
                        <li>
                          <span className='pull-left'>Order Total</span>
                          <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartPage