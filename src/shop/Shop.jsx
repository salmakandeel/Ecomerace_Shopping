import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import ProductCards from './ProductsCards'
import Pagniation from './Pagniation'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'
const Shop = () => {
  const showResults = "Showing 01-12 of 139 Results"
  const [GridList, setGridList] = useState(true)
  const [products, setProducts] = useState(Data)
  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 12
  const indexOfLasttProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLasttProduct - productPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLasttProduct)
  // Func to change currentPage
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  // filter products based on catogery
  const[selectedCategory,setSelectedCategory]=useState("All")
  const menuItems=[...new Set(Data.map((Val)=>Val.category))]
  // function filter products based on catogery
  const filterItems=(curcat)=>{
    const newItem=Data.filter((newVal)=>{
      return newVal.category===curcat  
    })
    setSelectedCategory(curcat)
    setProducts(newItem)
  }
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop " />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>
                    {showResults}
                  </p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className='grid' onClick={() => setGridList(!GridList)}>
                    {console.log(GridList)}
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={() => setGridList(!GridList)}>
                      {console.log(GridList)}
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                {/* display products */}
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>
                <Pagniation
                  productPerPage={productPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage} />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
              <Search products={products} GridList={GridList}/>
              <ShopCategory
              filterItems={filterItems}
              setItem={setProducts}
              menuItems={menuItems}
              setProducts={setProducts}
              selectedCategory={selectedCategory}
              />
              <PopularPost/>
              <Tags/>
              </aside>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Shop