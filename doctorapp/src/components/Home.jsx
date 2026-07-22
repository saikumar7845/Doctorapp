import { useState } from "react"
import Doctorcard from "./Doctorcard";
import axios from "axios";

function Home({ doctors = [], setDoctors }) {
    const [search, setSearch] = useState('')
    const [specialization, setSpecialization] = useState('')

    async function handleDelete(id) {
        try {
            await axios.delete(`https://doc-back.onrender.com/doctors/${id}`);
            alert(`Doctor with ID ${id} deleted successfully!`);
        } catch (error) {
            console.error('Error deleting doctor from API:', error);
            alert(`Doctor deleted locally.`);
        }

        if (setDoctors) {
            setDoctors(prev => prev.filter(doc => String(doc.id) !== String(id)));
        }
    }

    async function handleUpdate(id, updatedDoctor) {
        try {
            await axios.put(`https://doc-back.onrender.com/doctors/${id}`, updatedDoctor);
            alert(`Doctor ${updatedDoctor.name} updated successfully!`);
        } catch (error) {
            console.error('Error updating doctor in API:', error);
            alert(`Updated doctor locally.`);
        }

        if (setDoctors) {
            setDoctors(prev => prev.map(doc => String(doc.id) === String(id) ? { ...doc, ...updatedDoctor } : doc));
        }
    }

    // Generate dynamic list of available specializations from doctors
    const availableSpecializations = Array.from(
        new Set(doctors.map(d => d.specialization).filter(Boolean))
    );

    const filteredDoctors = doctors.filter(doctor => {
        const nameMatch = (doctor.name || '').toLowerCase().includes(search.toLowerCase());
        const specMatch = specialization 
            ? (doctor.specialization || '').toLowerCase() === specialization.toLowerCase()
            : true;
        return nameMatch && specMatch;
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
                    {availableSpecializations.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                    ))}
                </select>
            </div>
            <div className="cards-section">
                {filteredDoctors.length > 0 ? (filteredDoctors.map(doctor => {
                    return (
                        <Doctorcard 
                            key={doctor.id} 
                            id={doctor.id} 
                            name={doctor.name} 
                            age={doctor.age}
                            salary={doctor.salary}
                            gender={doctor.gender} 
                            specialty={doctor.specialization} 
                            image={doctor.image} 
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    )
                })) : (<p className="no-doctors-msg">No Doctors available</p>)}
            </div>
        </div>
    )
}

export default Home