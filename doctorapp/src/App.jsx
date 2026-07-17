import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState } from 'react'

function App() {
  /*const [count, setCount] = useState(0);
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('request is senting')
  }, [value])*/

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
        <div className="combined-container">
          <Navbar />
          <Section />
        </div>
        <div className="cards-section">
          <Doctorcard name="Dr. Nived" specialty="Ortho Specialist" gender="Male" image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. Jones" specialty="Cardiologist" gender="Male" image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. Sarah Jones" specialty="Pediatrician" gender="Female" image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. Emily Watson" specialty="Dermatologist" gender="Female" image="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. John Watson" specialty="Neurologist" gender="Male" image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. Lisa Park" specialty="General Physician" gender="Female" image="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. David Miller" specialty="Oncologist" gender="Male" image="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=600" />
          <Doctorcard name="Dr. Anna Green" specialty="Gynecologist" gender="Female" image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" />
        </div>
        <Addnewdoctor />
      </div>
    </>
  )
}

export default App