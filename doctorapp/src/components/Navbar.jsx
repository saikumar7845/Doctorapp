import './style.css'
import { useNavigate } from 'react-router-dom'

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
      localStorage.removeItem('isLoggedIn')
      navigate('/')
    } else {
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">Doctorapp</div>
      <div className="navbar-buttons">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/addnewdoctor')}>Add Doctor</button>
        <button onClick={() => navigate('/weather')}>Weather</button>
        <button onClick={handleAuthClick} className="auth-btn">
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  )
}

export default Navbar