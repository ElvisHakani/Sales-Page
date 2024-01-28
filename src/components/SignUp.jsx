import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TheUserContext } from "../context/TheUserContext"

function SignUp() {

const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name] : value
    }))
  }

  const {theUser, setTheUser} = useContext(TheUserContext)

  const handleSubmit =(event) => {
    event.preventDefault()
    if (!theUser) {
      setTheUser(userData)
    }
    fetch('https://654f6747358230d8f0cd46a0.mockapi.io/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.ok) {
        setUserData(userData)
        navigate('/')
      }
    })
  }

  return (
    <div className='in-container'>
        <div className="sign-container">
          <div className="heading">Sign Up</div>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input required className="input" type="text" name="name" placeholder="Name" onChange={handleChange}/>
            <input required className="input" type="text" name="surname" placeholder="Surname" onChange={handleChange}/>
            <input required className="input" type="email" name="email" placeholder="E-mail" onChange={handleChange}/>
            <input required className="input" type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <input className="login-button" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
  )
}
export default SignUp