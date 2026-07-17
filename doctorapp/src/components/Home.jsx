import React, { useState, useEffect } from "react"
import Doctorcard from "./Doctorcard";
function Home({ newDoctor = null }) {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        if (newDoctor && !Array.isArray(newDoctor)) {
            setDoctors(prevDoctor => [...prevDoctor, newDoctor])
        }
    }, [newDoctor])
    function fetchdata() {
        let data = [
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
            },
        ];
        setDoctors(data)
    }

    useEffect(() => {
        fetchdata()
    }, [])
    const [search, setSearch] = useState('')
    const [specialization, setSpecialization] = useState('')
    const filteredDoctors = doctors.filter(doctor => {
        return doctor.name.toLowerCase().includes(search.toLowerCase()) && doctor.specialization.toLowerCase().includes(specialization.toLowerCase());
    })

    return (
        <div className="home-section">
            <div className="search-filter-container">
                <input 
                    type="text" 
                    placeholder="Search by doctor name..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                    className="search-input" 
                />
                <select 
                    value={specialization} 
                    onChange={(e) => setSpecialization(e.target.value)} 
                    className="specialization-select"
                >
                    <option value="">All Specializations</option>
                    <option value="Muscles">Muscles</option>
                    <option value="Bones">Bones</option>
                    <option value="Heart">Heart</option>
                    
                </select>
            </div>
            <div className="cards-section">
                {filteredDoctors.length > 0 ? (filteredDoctors.map(doctor => {
                    return (<Doctorcard key={doctor.id} name={doctor.name} gender={doctor.gender} specialty={doctor.specialization} image={doctor.image} ></Doctorcard>)
                })) : (<p className="no-doctors-msg">No Doctors available</p>)}
            </div>
        </div>
    )

    {/*{doctors.map(doctor =>(
                <div key={doctor.id}>
                    <p>ID: {doctor.id}</p>
                    <p>Name: {doctor.name}</p>
                    <p>Age: {doctor.age}</p>
                    <p>Gender: {doctor.gender}</p>
                    <p>Specialization: {doctor.specialization}</p>
                    <p>Salary: {doctor.salary}</p>
                </div>
            ))}*/}

}
export default Home