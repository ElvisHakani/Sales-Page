import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TotalContext } from "../context/TotalContext"
import '../styles/CheckOut.css'

function CheckOut() {
    const navigate = useNavigate()
    const {total} = useContext(TotalContext)

    const handleSubmit = (event) => {
      event.preventDefault()
    }
  return (
    
    <div className="main-checkout">
      <div className="sign-container">
        <form className="form" onSubmit={handleSubmit}>
        <h1 className="check-header">Total Amout To Pay: {total}$</h1>
        <div className="flex">
          <div><i className="pi pi-credit-card fe" style={{ fontSize: '1.5rem' }}></i></div>
          <h3 className="check-text">Credit Card</h3>
        </div>
        <div className="check-input-div">
          <lable className='check-label'>Card number</lable>
          <input placeholder="123 456 789" className="check-input"/>
        </div>
        <div className="middle-check">
          <div>
            <lable className="check-label">Expiry date</lable>
            <input placeholder="MM/YY" className="input-extra"/>
          </div>
          <div>
            <lable className='check-label'>CVC/CVV</lable>
            <input placeholder="3 digits" className="input-extra"/>
          </div>
          </div>
        <div>
          <lable className='check-label'>Name on card</lable>
          <input placeholder="J.Smith" className="input"/>
        </div>
        <button className="login-button-other" onClick={() => alert(`This doesn't work of course`)}>Pay: {total}$</button>
        <button onClick={() => navigate('/cart')} className="login-button-other extra">Back</button>
        </form>
      </div>
    </div>
    
  )
}
export default CheckOut