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
                <div className="inside-div">
                <div className="input-section">
                    <label className="div-label">Enter your product's name</label>
                    <input required className="product-input" type="text" name="name" placeholder="Name" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">What is your product</label>
                    <p className="more-description">Ex: Phone, Toy, Case etc</p>
                    <input required className="product-input" type="text" name="product" placeholder="product" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">What category includes your product</label>
                    <p className="more-description">Ex: Electronics, Clothing etc</p>
                    <input required className="product-input" type="text" name="category" placeholder="category" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">How many of this product do you sell</label>
                    <input className="product-input" type="text" name="stock" placeholder="stock" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">How many options your product has</label>
                    <input className="product-input" type="text" name="options" placeholder="options" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a picture of your product</label>
                    <p className="more-description">At least 1 picture is required</p>
                    <input required className="product-input" type="text" name="picture1" placeholder="picture1" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a picture of your product</label>
                    <input className="product-input" type="text" name="picture2" placeholder="picture2" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a picture of your product</label>
                    <input className="product-input" type="text" name="picture3" placeholder="picture3" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a picture of your product</label>
                    <input className="product-input" type="text" name="picture4" placeholder="picture4" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a picture of your product</label>
                    <input className="product-input" type="text" name="picture5" placeholder="picture5" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a picture of your product</label>
                    <input className="product-input" type="text" name="picture6" placeholder="picture6" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Your products price</label>
                    <input required className="product-input" name="price" placeholder="price" onChange={handleChange}/>
                </div>
                <div className="input-section">
                    <label className="div-label">Enter a description of your product</label>
                    <textarea required className="product-input description" name="description" placeholder="description" onChange={handleChange}/>
                </div>
                </div>
                <div className="btn-div">
                    <input type="submit" value="Sell" className="sell-btn"/>
                </div>
            </form>
        </div>
        </>
    )
}
export default Sell