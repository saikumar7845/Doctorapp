import { useState } from 'react'
import { createPortal } from 'react-dom'
import './style.css'
import { useNavigate } from 'react-router-dom'

const DEFAULT_DOCTOR_IMAGE = "/doctor_default.png";

function Doctorcard({ name, specialty, gender, age, salary, image, id, onDelete, onUpdate }) {
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)

    const [editName, setEditName] = useState(name || '')
    const [editSpecialty, setEditSpecialty] = useState(specialty || '')
    const [editGender, setEditGender] = useState(gender || '')
    const [editAge, setEditAge] = useState(age || '')
    const [editSalary, setEditSalary] = useState(salary || '')
    const [editImage, setEditImage] = useState(image || '')

    const fallbackImage = DEFAULT_DOCTOR_IMAGE;
    
    const doctorImage = (image && !image.includes('cdn-mw.com')) ? image : fallbackImage;

    function handleSave(e) {
        e.preventDefault()
        let updatedDoctor = {
            id,
            name: editName,
            specialization: editSpecialty,
            gender: editGender,
            age: parseInt(editAge) || editAge,
            salary: parseInt(editSalary) || editSalary,
            image: editImage || fallbackImage
        }
        if (onUpdate) {
            onUpdate(id, updatedDoctor)
        }
        setIsEditing(false)
    }

    return (
        <div className="doctor-card">
            <div className="doctor-image-container">
                <img 
                    src={doctorImage} 
                    alt={`${name} headshot`} 
                    className="doctor-card-image" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                    }}
                />
            </div>
            <div className="doctor-info">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-specialty">{specialty}</p>
                <p className="doctor-gender">{gender}</p>
                <p className='doctorid'>{String(id).length > 4 ? String(id).slice(-4) : id}</p>
                <div className="card-actions">
                    <button className="book-btn" onClick={() => navigate(`/doctordetails/${id}`)}>View Details</button>
                    {onUpdate && <button className="edit-btn" onClick={() => setIsEditing(true)}>Update</button>}
                    {onDelete && <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>}
                </div>
            </div>

            {isEditing && createPortal(
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Update Doctor Details</h3>
                        <form className="doctor-form" onSubmit={handleSave}>
                            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Doctor Name" required />
                            <input type="number" value={editAge} onChange={(e) => setEditAge(e.target.value)} placeholder="Age" required />
                            <select value={editGender} onChange={(e) => setEditGender(e.target.value)} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            <input type="text" value={editSpecialty} onChange={(e) => setEditSpecialty(e.target.value)} placeholder="Specialization" required />
                            <input type="number" value={editSalary} onChange={(e) => setEditSalary(e.target.value)} placeholder="Salary" required />
                            <input type="text" value={editImage} onChange={(e) => setEditImage(e.target.value)} placeholder="Image URL (optional)" />
                            <div className="card-actions">
                                <button type="submit" className="add-doctor-btn">Save Changes</button>
                                <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

export default Doctorcard