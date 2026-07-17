import Home from './Home';
import './style.css'
import { useState } from 'react'
function Addnewdoctor() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [salary, setSalary] = useState('');

    const [newDoctor, setNewDoctor] = useState(null)
    function handleAddDoctor(e) {
        e.preventDefault();
        let formdetails = { id: Date.now(), name, age, gender, specialization, salary };
        setNewDoctor(formdetails);
        console.log(formdetails);
    }
    return (
        <>
            <div className="add-doctor-section">
                <h2>Add New Doctor</h2>
                <form className="doctor-form" onSubmit={handleAddDoctor}>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Doctor Name" required />
                    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter Age" required />
                    <select value={gender} onChange={(e) => setGender(e.target.value)} name="gender" defaultValue="" required>
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <input value={specialization} onChange={(e) => setSpecialization(e.target.value)} name="specialization" type="text" placeholder="Enter Specialization" required />
                    <input value={salary} onChange={(e) => setSalary(e.target.value)} name="salary" type="number" placeholder="Enter Salary" required />
                    <button type="submit" className="add-doctor-btn">Add Doctor</button>
                </form>
            </div>
            <Home newDoctor={newDoctor}></Home>
        </>
    )


}

export default Addnewdoctor