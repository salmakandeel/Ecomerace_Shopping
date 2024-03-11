import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import visa from "../../src/assets/images/shop/visa1.jpg"
import payPal from "../../src/assets/images/shop/paypal.jpg"
import { useLocation, useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
    // define variables
    const navigate=useNavigate()
    const location=useLocation()
    console.log(location.state);
    const from=location.state?.from?.pathname||"/"
    console.log(from);
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState("visa")
    // handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
//    to confirm order
const handleOrderConfirm=()=>{
    alert("Your order is placed successfully ")
    localStorage.removeItem("cart")
navigate(from)
}
    return (
        <div>
            <Button variant="primary" className="py-2" onClick={handleShow}>Procced to checkout</Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className="modal fade"
                centered
            >
                <div className="modal-dialog">
                    <h5 className="px-3 mb-3">
                        Select Your Payment Method
                    </h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' role="tablist" id="myTab">
                                    <li className='nav-item' id="presentation">
                                        <a className={`nav-link ${activeTab == "visa" ? "active" : ""}`}
                                            id="visa-tab"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected={activeTab == "visa"}
                                            aria-controls='visa'
                                            onClick={() => handleTabChange("visa")}

                                            href="#visa"><img width="80" src={visa} /></a>
                                    </li>
                                    <li className='nav-item' id="presentation">
                                        <a className={`nav-link ${activeTab == "paypal" ? "active" : ""}`}
                                            id="paypal-tab"
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected={activeTab == "paypal"}
                                            aria-controls='paypal'
                                            onClick={() => handleTabChange("paypal")}

                                            href="#paypal"><img width="80" src={payPal} /></a>
                                    </li>
                                </ul>
                                {/* contents */}
                                <div className="tab-content" id="myTabContents">
                                     {/* visa  content */}
                                    <div className={`tab-pane fade ${activeTab == "visa" ? "show active" : ""}`}
                                        id="visa"
                                        role="tabpanel"
                                        aria-labelledby='visa-tab'
                                    > 
                                    {/* visa tab content */}

                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name="name" id="name" className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" min="1" max="999" name="number" id="number" className='form-control' required />
                                                    <span>Card Number</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" min="1" max="999" name="expirationDate" id="expirationDate" className='form-control' required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" min="1" max="999" name="cvvNumber" id="cvvNumber" className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order</button>
                                                </div>
                                            </div>
                                        </div>                                       
                                    </div>
                                    {/* visa  content */}
                                    <div className={`tab-pane fade ${activeTab == "paypal" ? "show active" : ""}`}
                                        id="paypal"
                                        role="tabpanel"
                                        aria-labelledby='paypal-tab'
                                    > 
                                    {/* visa tab content */}

                                    <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Accont Info</h5>
                                            </div>
                                             <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="email" name="email" id="email" className='form-control' required />
                                                    <span>Enter your email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text"  name="name" id="name" className='form-control' required />
                                                    <span>Your name</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                <div className="inputbox">
                                                        <input type="text" min="1" max="999" name="Info" id="Info" className='form-control' required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" min="1" max="999" name="cvvNumber" id="cvvNumber" className='form-control' required />
                                                       <span></span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                                                </div>
                                            </div>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default CheckoutPage