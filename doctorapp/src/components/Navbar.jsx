import './style.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navbar-logo">Doctorapp</div>
      <div className="navbar-buttons">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/addnewdoctor')}>Add Doctor</button>
      </div>
    </div>
  )
}

export default Navbar