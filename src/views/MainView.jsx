import '../styles/MainView.css'
import useFetch from '../hooks/UseFetch.js'
import { Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function MainView() {
  const { data: Products, isPending, error} = useFetch(
    "https://654f6747358230d8f0cd46a0.mockapi.io/Products"
    );
  return (
    <div className='container-main'>
      {isPending && <div className="loader"></div>}
      {error && <h1>Its Fucked! Sorry</h1>}
      {Products && 
      Products.map((products, index) => (
        <Fragment key={index}>
          <NavLink to={products.id.toString()} style={{ textDecoration: 'none' }} className='NavLink'>
            <div className='card'>
              <div className='img-around'>
                <img src={products.picture1} className='photo1' />
              </div>
              <div className='all-others'>
                <h2 className='product-name'>{products.name}</h2>
                <p className='product-description'>{products.description}</p>
                <h5>{products.category }</h5>
                <h2 className='price'>${products.price }</h2>
                <h6 className='product-options'>{products.options} Specs</h6>
              </div>
            </div>
          </NavLink>
        </Fragment>
      ))}
    </div>
  )
}
export default MainView