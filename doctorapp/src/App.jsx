import Navbar from './components/Navbar'
import Section from './components/Section'
import Addnewdoctor from './components/Addnewdoctor'
import Doctordetails from './components/Doctordetails'
import Home from './components/Home'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Weather from './components/Weather'
import axios from 'axios'
import ProtectedRoute from './components/ProtectedRoute'
// import useCounter from './components/useCounter'

/*
const INITIAL_DOCTORS = [
  {
    id: 1,
    name: "Teja",
    age: 26,
    gender: "Male",
    specialization: "Muscles",
    salary: 7000000,
    image: "/doctor_default.png"
  },
  {
    id: 2,
    name: "Sam",
    age: 26,
    gender: "Male",
    specialization: "Bones",
    salary: 4000000,
    image: "/doctor_default.png"
  },
  {
    id: 3,
    name: "Anu",
    age: 25,
    gender: "Female",
    specialization: "Heart",
    salary: 5000000,
    image: "/doctor_default.png"
  }
]
*/

function App() {
  const [doctors, setDoctors] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })
  // const [count, increment, decrement] = useCounter()

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await axios.get('https://doc-back.onrender.com/doctors')
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setDoctors(response.data)
        }
      } catch (error) {
        console.error('Failed to fetch initial doctors from API:', error)
      }
    }
    fetchDoctors()
  }, [])

  return (
    <>
      {/* 
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '16px',
        margin: '30px auto 10px auto', 
        padding: '16px 24px',
        maxWidth: '300px',
        background: 'rgba(255, 255, 255, 0.95)',
        border: '1.5px solid rgba(124, 58, 237, 0.15)',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(124, 58, 237, 0.08)'
      }}>
        <button 
          onClick={decrement} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '12px', 
            border: '1.5px solid #7c3aed', 
            background: 'transparent', 
            color: '#7c3aed', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#f3e8ff' }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
        >
          -
        </button>
        <span style={{ fontSize: '20px', fontWeight: '700', color: '#1e1b4b', minWidth: '45px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          {count}
        </span>
        <button 
          onClick={increment} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '12px', 
            border: 'none', 
            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', 
            color: '#ffffff', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'all 0.2s',
            boxShadow: '0 4px 10px rgba(124, 58, 237, 0.2)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
        >
          +
        </button>
      </div>
      */}
      <div className="app-container">
        <Routes>
          <Route path='/' element={
            <>
              <div className="combined-container">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Section />
              </div>
              <Home doctors={doctors} setDoctors={setDoctors} />
            </>
          } />
          <Route path='addnewdoctor' element={
            <>
              <div className="combined-container">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              </div>
              <ProtectedRoute isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Addnewdoctor setDoctors={setDoctors} />
              </ProtectedRoute>
            </>
          } />
          <Route path='doctordetails/:id' element={
            <>
              <div className="combined-container">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              </div>
              <Doctordetails doctors={doctors} setDoctors={setDoctors} />
            </>
          } />
          <Route path='weather' element={
            <>
              <div className="combined-container">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              </div>
              <Weather />
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App