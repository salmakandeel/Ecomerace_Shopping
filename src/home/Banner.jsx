import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom'
import SelectedCategory from '../components/SelectedCategory'

const Banner = () => {
  const title = (
    <h2>Search Your One From <span>Thound</span> of Products</h2>
  )
  const desc = "We have the largest collection of products"
  // const bannerList = [
  //   {
  //     iconName: "iconfont-users-alt-4",
  //     text: "1.5 Million Customers"
  //   },
  //   {
  //     iconName: "iconfont-notification",
  //     text: "More than 2000 Marchents"
  //   },
  //   {
  //     iconName: "iconfont-globe",
  //     text: "Buy Anything Online"
  //   }
  // ]
  const [searchInput, setSearchInput] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(productData)
  // search functionality 
  const handleSearch = e => 
  {
const searchItem=e.target.value
setSearchInput(searchItem)
// filtering products based on search
const filtered=productData.filter((product)=>product.name.toLowerCase().includes(searchItem.toLowerCase()))
setFilteredProducts(filtered)
  }
  return (
    <div className='banner-section style-4'>

      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"}/>
            <input type="text" name="search" id="search" placeholder='Search your product' value={searchInput}
              onChange={handleSearch} />
              <button type="submit">
              <i className="icofont-ui-search"></i>
              </button>
          </form>
          <p>{desc}</p>
          <ul className='lab-ul'>
{
  searchInput&&filteredProducts.map((product,i)=>
  <li key={i}><Link to={`/shop/${product.id}`}>{product.name}</Link></li>)
}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner