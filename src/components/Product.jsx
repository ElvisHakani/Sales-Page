import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/UseFetch"
import '../styles/Product.css'
import { useContext, useEffect, useState } from "react"
import { TheUserContext } from "../context/TheUserContext"

function Card() {  
  const navigate = useNavigate()
  const {data : products, isPending, error} = useFetch('https://654f6747358230d8f0cd46a0.mockapi.io/Products')
  const {id} = useParams()
  
  const [product, setProduct] = useState(null)
  const {theUser, setTheUser} = useContext(TheUserContext)

  
  useEffect(()=>{
    const foundProduct = products?.find(x => x.id.toString() === id);
        foundProduct ? setProduct(foundProduct) : setProduct(null)
      },[id, products])

      const [currentPicture, setCurrentPicture] = useState(product ? product.picture1 : null);

      useEffect(() => { 
        if (product) {
          setCurrentPicture(product.picture1);
        }
      }, [product]);

      const handleSignedIn = () => {
        if (!theUser) {
          alert("Please Sign In First");
        } else if (theUser.productsID && theUser.productsID.includes(product.id)) {
          alert('This Item Is Already Added To The Cart')
        } else {
          setTheUser((prevUser) => ({
            ...prevUser,
            productsID: [...(prevUser.productsID || []), product.id],
          }));
          alert('Product Added');
        }
      };
      useEffect(() => {
        if (theUser) {
          fetch(`https://654f6747358230d8f0cd46a0.mockapi.io/users/${theUser.id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(theUser)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Connection Failed')
            }
          })
          .catch(error => {
            alert('Sorry, This Action Failed');
          });
        }
      }, [theUser]);
    
      

  return (
    <div className="product-main">
    {isPending && <div className="loader"></div>}
    {error && <h1>Its Fucked! Sorry</h1>}
    {product && 
      <div className="center-div">
        <div className="images-div">
          <img src={currentPicture} className="image"></img>
          <div className="small-imgs">
            <img src={product.picture1} className="small-img" onClick={() => setCurrentPicture(product.picture1)}></img>
            {product.picture2 && <img src={product.picture2} className="small-img" onClick={() => setCurrentPicture(product.picture2)}></img>}
            {product.picture3 && <img src={product.picture3} className="small-img" onClick={() => setCurrentPicture(product.picture3)}></img>}
            {product.picture4 && <img src={product.picture4} className="small-img" onClick={() => setCurrentPicture(product.picture4)}></img>}
            {product.picture5 && <img src={product.picture5} className="small-img" onClick={() => setCurrentPicture(product.picture5)}></img>}
            {product.picture6 && <img src={product.picture6} className="small-img" onClick={() => setCurrentPicture(product.picture6)}></img>}
          </div>
        </div>
        <div className="info-div">
          <h3>{product.product}</h3>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button className="add-cart" onClick={handleSignedIn}>Add To Cart</button>
          <button className="add-cart" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    }
    </div>
    
  )
}

export default Card