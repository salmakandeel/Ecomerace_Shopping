import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from "swiper/modules"
import ProductDisplay from './ProductDisplay'
import Review from './Review'
import PopularPost from './PopularPost'
import Tags from './Tags'
const SingleProduct = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    // fetch data
    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProducts(data))
    }, [])
    // filter products to get specfic product using id
    const product = products.filter((product) => product.id === id)
    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE PRODUCT"} curPage={'/shop/single product'} />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* product details */}
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={"true"}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={
                                                            {
                                                                prevEl: "pro-single-prev",
                                                                nextEl: "pro-single-prev",
                                                            }
                                                        }
                                                        className='mySwiper'
                                                    >
                                                        {
                                                            product.map((p, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div>
                                                                        <img src={p.img} />

                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className="pro-single-next">
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>
                                                    <div className="pro-single-prev">
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                <div>
                                                    {
                                                        product.map(p => (
                                                            <ProductDisplay key={p.id} product={p} />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                       
                                </div>
                                {/* reviews */}
                                <div className="review">
                                          <Review/>
                                    </div>
                            </article>
                        </div>
                        {/* rigth side */}
                        <div className="col-lg-4 col-12">
                           <PopularPost/>
                           <Tags/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct