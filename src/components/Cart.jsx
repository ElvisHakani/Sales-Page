import { useContext, useState } from "react";
import { TheUserContext } from "../context/TheUserContext";
import "../styles/Cart.css";
import useFetch from "../hooks/UseFetch";
import { useNavigate } from "react-router-dom";

function Cart() {


  const navigate = useNavigate()
  const { theUser, setTheUser } = useContext(TheUserContext);

  const { data: products } = useFetch(
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

  let added = true
  if (theUser.productsID.length > 0) {
    added = false
  }

  return (
    <div className="main-div">
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
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <h1>${product.price}</h1>
                  <button onClick={() => handleRemove(product.id)} className="remove-btn">Remove From Cart</button>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
export default Cart;