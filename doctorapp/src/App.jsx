import Navbar from './components/Navbar'
import Section from './components/Section'
import Addnewdoctor from './components/Addnewdoctor'
import Doctordetails from './components/Doctordetails'
import Home from './components/Home'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const INITIAL_DOCTORS = [
  {
    id: 1,
    name: "Teja",
    age: 26,
    gender: "Male",
    specialization: "Muscles",
    salary: 7000000,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Sam",
    age: 26,
    gender: "Male",
    specialization: "Bones",
    salary: 4000000,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Anu",
    age: 25,
    gender: "Female",
    specialization: "Heart",
    salary: 5000000,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  }
]

function App() {
  const [doctors, setDoctors] = useState(INITIAL_DOCTORS)

  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {/*{count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        {value}
        <button onClick={() => setValue(value + 1)}>Value Increment</button>
        <button onClick={() => setValue(value - 1)}>Value Decrement</button>*/}
      </div>
      <div className="app-container">
        <Routes>
          <Route path='/' element={
            <>
              <div className="combined-container">
                <Navbar />
                <Section />
              </div>
              <Home doctors={doctors} />
            </>
          } />
          <Route path='addnewdoctor' element={
            <>
              <div className="combined-container">
                <Navbar />
              </div>
              <Addnewdoctor setDoctors={setDoctors} />
            </>
          } />
          <Route path='doctordetails/:id' element={
            <>
              <div className="combined-container">
                <Navbar />
              </div>
              <Doctordetails doctors={doctors} />
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App