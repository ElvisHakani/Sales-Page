import { Fragment, useContext, useEffect, useRef, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { SearchContext } from "../context/SearchContext";
import { NavLink } from "react-router-dom";

function Searched() {
  const { search } = useContext(SearchContext);
  const { data: Products, isPending } = useFetch('https://654f6747358230d8f0cd46a0.mockapi.io/Products');

  let items = false

  const handleItems = () => {
    Products && Products.map((product) => {
          const productString = Object.values(product).join(' ');
          if (productString.toLowerCase().includes(search.toLowerCase())) {
            items = true
          }
        })
  }
  Products && handleItems()
  console.log(items)
  
  return (
    <div className="container-main">
      {!items && <h1 className="no-items">No Products Found</h1>}
      {isPending && <div className="loader"></div>}
      {Products &&
        Products.map((product) => {
          const productString = Object.values(product).join(' ');
          if (productString.toLowerCase().includes(search.toLowerCase())) {
            return (
              <Fragment key={product.id}>
                <NavLink to={'/' + product.id.toString()} style={{ textDecoration: 'none' }} className='NavLink'>
                  <div className='card' >
                    <div className='img-around'>
                      <img src={product.picture1} className='photo1' alt={product.name} />
                    </div>
                    <div className='all-others'>
                      <h2 className='product-name'>{product.name}</h2>
                      <p className='product-description'>{product.description}</p>
                      <h5>{product.category}</h5>
                      <h2 className='price'>${product.price}</h2>
                      <h6 className='product-options'>{product.options} Specs</h6>
                    </div>
                  </div>
                </NavLink>
              </Fragment>
            );
          }
        })}
    </div>
  );
}

export default Searched;
