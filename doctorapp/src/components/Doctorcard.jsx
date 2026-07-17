import './style.css'

function Doctorcard({ name, specialty, gender, image }) {
    return (
        <div className="doctor-card">
            <div className="doctor-image-container">
                <img src={image} alt={`${name} headshot`} className="doctor-card-image" />
            </div>
            <div className="doctor-info">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-specialty">{specialty}</p>
                <p className="doctor-gender">{gender}</p>
                <button className="book-btn">View Details</button>
            </div>
        </div>
    )
}

export default Doctorcard