import React from 'react'
import "./Product.css"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Product({data}) {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className='container product'>
        <h1 className='product__h'>Popular Now</h1>
        <div className="product__card">
            {
                data?.map((el) => <div key={el.id} className="product__single">
                    <h1>{el.title}</h1>
                    <b>{el.price}</b>
                    <Link to={`/product/${el.id}`}>
                    <div className="prduct__img">
                      <img src={el.url} alt="" />
                    </div>
                    </Link>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Product