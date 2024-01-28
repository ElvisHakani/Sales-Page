import { useContext, useEffect, useState } from "react";
import { TheUserContext } from "../context/TheUserContext";
import "../styles/Cart.css";
import useFetch from "../hooks/UseFetch";
import { useNavigate } from "react-router-dom";
import { TotalContext } from "../context/TotalContext";

function Cart() {

const {total, setTotal} = useContext(TotalContext)
  const navigate = useNavigate()
  const { theUser, setTheUser } = useContext(TheUserContext);

  const { data: products, isPending } = useFetch(
    "https://654f6747358230d8f0cd46a0.mockapi.io/Products"
  );

    const [counter, setCounter] = useState(0)

  const handleRemove = (productId) => {
    const updatedProductsID = theUser.productsID.filter(
      (id) => id !== productId
    );

    const updatedUser = { ...theUser, productsID: updatedProductsID };

    fetch(`https://654f6747358230d8f0cd46a0.mockapi.io/users/${theUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (response.ok) {
          setTheUser(updatedUser)
          alert('Product Removed')
          setCounter(counter + 1)
        }
      })
      .catch((error) => {
        alert("Sorry, This Action Failed");
      });
  };


  const prices = []
  let theTotal = 0


  const handleTotal = () => {
    products && products.map((product) => {
      if (theUser.productsID && theUser.productsID.includes(product.id)) {
        prices.push(parseFloat(product.price))
      }
    })
    prices.forEach(e => {
      theTotal += e
    });
    setTotal(theTotal.toFixed(2))
    if (theTotal === 0) setTotal(null)
  }
products && handleTotal()


  let added = true
  if (theUser.productsID.length > 0) {
    added = false
  }

  return (
    <div className="cart-main">
        {!total && <h1 className="no-items">No Items Added To Cart</h1>}
      {total && <div className="check-out">
      {products && 
      products.map((product, id) => {
        if (theUser.productsID && theUser.productsID.includes(product.id)) {
          return(
              <div key={id} className="cart-prices">
                <h3>{product.name}: </h3>
                <h4 className="item-price"> {product.price}$</h4>
              </div>
              )
            }
          })}
          <h2 className="total">Total: {theTotal.toFixed(2)}$</h2>
          <button onClick={() => navigate('/checkout')} className="checkout">CheckOut</button>
          </div>}
    <div className="main-cart-div">
    {isPending && <div className="loader"></div>}
      {added && 
      <div className="no-products">
        <h1>No products added to cart</h1>
        <button onClick={() => navigate('/')} className="remove-btn">Back</button>
      </div>
      }
      {products &&
        products.map((product, index) => {
          if (theUser.productsID && theUser.productsID.includes(product.id)) {
            return (
              <div className="the-main-cart" key={product.id}>
                <div className="image">
                  <img src={product.picture1} alt={product.name} className="the-picture"/>
                </div>
                <div className="info-dive">
                  <h1 className="name">{product.name}</h1>
                  <p className="product-descriptions">{product.description}</p>
                  <h1>${product.price}</h1>
                  <button onClick={() => handleRemove(product.id)} className="remove-btn">Remove From Cart</button>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  </div>
  );
}
export default Cart;