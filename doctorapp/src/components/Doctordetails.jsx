import { useParams, useNavigate } from "react-router-dom";
import './style.css'

function Doctordetails({ doctors = [] }) {
    const { id } = useParams()
    const navigate = useNavigate()

    const doctor = doctors.find(doc => String(doc.id) === String(id))

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

    return (
        <div className="doctor-details-container">
            <button className="back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
            <div className="doctor-details-card">
                <img src={doctor.image} alt={doctor.name} className="doctor-details-image" />
                <div className="doctor-details-info">
                    <span className="specialty-tag">{doctor.specialization}</span>
                    <h2>{doctor.name}</h2>
                    <p><strong>Age:</strong> {doctor.age}</p>
                    <p><strong>Gender:</strong> {doctor.gender}</p>
                    <p><strong>Salary:</strong> ₹{doctor.salary.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Doctordetails