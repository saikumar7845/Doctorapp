import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

function Doctordetails({ doctors = [], setDoctors }) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [fetchedDoctor, setFetchedDoctor] = useState(null)
    const [loading, setLoading] = useState(false)

    const doctor = doctors.find(doc => String(doc.id) === String(id)) || fetchedDoctor;

    useEffect(() => {
        if (!doctor && id) {
            setLoading(true);
            axios.get(`https://doc-back.onrender.com/doctors/${id}`)
                .then(res => {
                    if (res.data) {
                        setFetchedDoctor(res.data);
                    }
                })
                .catch(err => console.error("Error fetching doctor details:", err))
                .finally(() => setLoading(false));
        }
    }, [id, doctor]);

    async function handleDelete() {
        try {
            await axios.delete(`https://doc-back.onrender.com/doctors/${id}`);
            alert('Doctor deleted successfully!');
        } catch (error) {
            console.error('Error deleting doctor from API:', error);
            alert('Doctor deleted locally.');
        }

        if (setDoctors) {
            setDoctors(prev => prev.filter(doc => String(doc.id) !== String(id)));
        }
        navigate('/');
    }

    if (loading) {
        return (
            <div className="doctor-details-container">
                <p>Loading doctor details...</p>
            </div>
        )
    }

    if (!doctor) {
        return (
            <div className="doctor-details-container">
                <button className="back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
                <div className="no-doctors-msg">
                    <h2>Doctor not found</h2>
                    <p>The doctor details you are looking for might have been removed or do not exist.</p>
                </div>
            </div>
        )
    }

    const fallbackImage = "/doctor_default.png";

    const doctorImage = (doctor.image && !doctor.image.includes('cdn-mw.com')) ? doctor.image : fallbackImage;

    return (
        <div className="doctor-details-container">
            <button className="back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
            <div className="doctor-details-card">
                <img 
                    src={doctorImage} 
                    alt={doctor.name} 
                    className="doctor-details-image" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                    }}
                />
                <div className="doctor-details-info">
                    <span className="specialty-tag">{doctor.specialization}</span>
                    <h2>{doctor.name}</h2>
                    <p><strong>Age:</strong> {doctor.age}</p>
                    <p><strong>Gender:</strong> {doctor.gender}</p>
                    <p><strong>Salary:</strong> ₹{doctor.salary ? doctor.salary.toLocaleString() : 'N/A'}</p>
                    <div style={{ marginTop: '16px' }}>
                        <button className="delete-btn" onClick={handleDelete}>Delete Doctor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctordetails