import './style.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">Doctorapp</div>
      <div className="navbar-buttons">
        <button>Home</button>
        <button>Add Doctor</button>
      </div>
    </div>
  )
}

export default Navbar