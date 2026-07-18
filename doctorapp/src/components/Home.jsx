import { useState } from "react"
import Doctorcard from "./Doctorcard";

function Home({ doctors }) {
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
                    return (<Doctorcard key={doctor.id} id={doctor.id} name={doctor.name} gender={doctor.gender} specialty={doctor.specialization} image={doctor.image} ></Doctorcard>)
                })) : (<p className="no-doctors-msg">No Doctors available</p>)}
            </div>
        </div>
    )
}

export default Home