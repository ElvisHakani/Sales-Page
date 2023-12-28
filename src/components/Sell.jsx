import { useState } from "react"
import '../styles/Sell.css'
import { useNavigate } from "react-router-dom"

function Sell() {
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        name: '',
        description: '',
        product: '',
        price : 0,
        category: '',
        stock: '',
        options: '',
        picture1: '',
        picture2: '',
        picture3: '',
        picture4: '',
        picture5: '',
        picture6: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name] : value
        }))
    }

    const handleSubmit =(event) => {
        event.preventDefault()
        fetch('https://654f6747358230d8f0cd46a0.mockapi.io/Products', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => {
            if (response.ok) {
            setProduct(product)
            alert('Product is on sale')
            navigate('/')
            }
        })
        }

    return (
        <>
        <div className="main-div">
            <h1 className="label">Sell a product</h1>
            <form action="" onSubmit={handleSubmit} className="product-form">
                <input required className="product-input" type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <input required className="product-input" type="text" name="product" placeholder="product" onChange={handleChange}/>
                <input required className="product-input" type="text" name="category" placeholder="category" onChange={handleChange}/>
                <input className="product-input" type="text" name="stock" placeholder="stock" onChange={handleChange}/>
                <input className="product-input" type="text" name="options" placeholder="options" onChange={handleChange}/>
                <input required className="product-input" type="text" name="picture1" placeholder="picture1" onChange={handleChange}/>
                <input className="product-input" type="text" name="picture2" placeholder="picture2" onChange={handleChange}/>
                <input className="product-input" type="text" name="picture3" placeholder="picture3" onChange={handleChange}/>
                <input className="product-input" type="text" name="picture4" placeholder="picture4" onChange={handleChange}/>
                <input className="product-input" type="text" name="picture5" placeholder="picture5" onChange={handleChange}/>
                <input className="product-input" type="text" name="picture6" placeholder="picture6" onChange={handleChange}/>
                <input required className="product-input" type="number" name="price" placeholder="price" onChange={handleChange}/>
                <textarea required className="product-input description" name="description" placeholder="description" onChange={handleChange}/>
                <div className="btn-div">
                    <input type="submit" value="Sell" className="sell-btn"/>
                </div>
            </form>
        </div>
        </>
    )
}
export default Sell