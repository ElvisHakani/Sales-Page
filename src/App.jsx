import { Outlet, useNavigate } from 'react-router-dom';
import './App.css'
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';
import { useContext } from 'react';
import { TheUserContext } from './context/TheUserContext';
import { SearchContext } from './context/SearchContext';
import WebLogo from './assets/WebLogo.jpeg'

function App() {

  const handleSubmit = (event) => {
    event.preventDefault()
    search ? navigate('/searched') : alert('Search is empty')
  }

  const {search, setSearch} = useContext(SearchContext)

  const handleChange = (event) => {
    let inputName = event.target.name
    let value = event.target.value
    if (inputName === 'search') setSearch(value)
  }

  const navigate = useNavigate()

  const {theUser} = useContext(TheUserContext)

  const handleSell = () => {
    if (!theUser) {
      navigate('/signin')
      alert("Please Sign In First")
    } else navigate('/sell')
  }

  return (
    <>
    <div className='the-main'>
      <div className="nav-bar">
        <div className='logo-div'>
          <p className='logo-text'>Buy</p>
          <p className='logo-text'>&</p>
          <p className='logo-text'>Sell</p>
        </div>
        
        <form className="search" onSubmit={handleSubmit}>
          <input placeholder="Search..." type="text" className='input' name='search' onChange={handleChange}/>
          <input type='submit' className='search-btn' value="Search"/>
        </form>

        <div className="nav-btns">
          <button className='nav-btn' onClick={() => {navigate('/'), document.documentElement.scrollTop = 0}}>Home</button>
          {!theUser && <button className="nav-btn" onClick={() => navigate('/signin')}>Sign In</button>}
          {!theUser && <button className="nav-btn" onClick={() => navigate('/signup')}>Sign Up</button>}
          <button className='nav-btn' onClick={handleSell}>Sell A Product</button>
          {theUser && <button className="nav-btn" onClick={() => navigate('/cart')}><i className="pi pi-shopping-cart" style={{ fontSize: '1.5rem' }}></i></button>}
          {theUser && <div className='user-name'><i className="pi pi-user" style={{ fontSize: '1rem' }}></i>{theUser.name}</div>}
        </div>
      </div>
      </div>
      <Outlet />
    </>
  )
}

export default App
