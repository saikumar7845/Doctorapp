import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Addnewdoctor({ setDoctors }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [salary, setSalary] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()

    async function handleform(e) {
        e.preventDefault()
        let formdetails = {
            name,
            age: parseInt(age) || age,
            gender,
            specialization,
            salary: parseInt(salary) || salary,
            image: image || "/doctor_default.png"
        }

        let addedDoctor = { ...formdetails, id: Date.now() };

        try {
            const res = await axios.post('https://doc-back.onrender.com/doctors', formdetails)
            if (res.data && res.data.id) {
                addedDoctor = res.data;
            }
            alert('Doctor added successfully!')
        } catch (error) {
            console.error('Error posting to API:', error)
            alert('Failed to post to API server, updated locally.')
        }

        if (setDoctors) {
            setDoctors(prev => [...prev, addedDoctor])
        }

        // Reset form fields
        setName('')
        setAge('')
        setGender('')
        setSpecialization('')
        setSalary('')
        setImage('')

        // Navigate back to home page
        navigate('/')
    }

    return (
        <div>
            <h1>Add New Doctor</h1>
            <form className='form-container' onSubmit={handleform}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Doctor name' required />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' required />
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder='Enter Specialization' required />
                <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Enter Salary' required />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter Image URL (optional)' />
                <button type='submit'>Add Doctor</button>
            </form>
        </div>
    )
}

export default Addnewdoctor