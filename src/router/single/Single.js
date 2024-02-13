import React from 'react'
import "./Single.css"
import { PRODUCTS } from '../../static/Index'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Single() {
  const params = useParams()
  const oneItem = PRODUCTS.find((el)=> el.id === params.id)
console.log(oneItem);
  return (
    <div className='container'>
        <div  className="single__route">
        <div className='single__img'><img  src={oneItem?.url} width={350} alt="" /></div>
        <div className='single__title'>
            <h2 className='single__name'>{oneItem?.title}</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis, ipsam incidunt cupiditate praesentium neque quasi voluptas doloremque ea sapiente officiis ducimus, reiciendis fuga! Natus eligendi, impedit expedita voluptas quo quibusdam rerum beatae quidem porro perspiciatis ut laborum earum illum illo amet deleniti! Corporis sunt possimus iure, quos commodi fugit.</p>
            <h3 className='single__price'>{oneItem?.price}</h3>
            <br />
<div className="single__button">
  <button  className='single__btn'>Sotib olish</button>
  <Link to={"/"}>
  <button className='single__btn single__admin'>Bosh sahifa</button>
  </Link>

</div>
        </div>

        </div>
        
        
    </div>  )
}

export default Single