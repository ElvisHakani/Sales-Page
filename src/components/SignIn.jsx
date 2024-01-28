import '../styles/SignIn.css'
import { useContext, useState } from 'react'
import useFetch from '../hooks/UseFetch';
import { useNavigate } from 'react-router-dom';
import { TheUserContext } from '../context/TheUserContext';


function SignIn() {
  const navigate = useNavigate()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleChange = (event) => {
  let inputName = event.target.name
  let value = event.target.value

  if (inputName === 'email') setEmail(value)
  else if (inputName === 'password') setPassword(value)
}

const {data : users, isPending} = useFetch('https://654f6747358230d8f0cd46a0.mockapi.io/users')

const {theUser, setTheUser} = useContext(TheUserContext)

const [loginError, setLoginError] = useState(null)

const handleSubmit = (event) => {
  event.preventDefault()
  const user = users.find(x => email === x.email)
  if (user && user.password === password) {
    setLoginError(null)
    navigate('/')
    setTheUser(user)
  }else setLoginError('Incorrect credentials')
}

  return (
    <div className='in-container'>
        <div className="sign-container">
          <div className="heading">Sign In</div>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input required className="input" type="email" name="email" id="email" placeholder="E-mail" onChange={handleChange}/>
            <input required className="input" type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
            <h3 className='error'>{loginError}</h3>
            <input className="login-button" type="submit" value="Sign In" />
            <h4 className='if'>You dont have an account?</h4>
            <button className='login-button-other' onClick={() => navigate('/signup')}>Sign Up</button>
          </form>
        </div>
      </div>
  )
}
export default SignIn

