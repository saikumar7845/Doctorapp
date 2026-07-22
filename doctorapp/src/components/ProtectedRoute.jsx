import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({ isLoggedIn, children }) {
  const navigate = useNavigate()

  if (!isLoggedIn) {
    return (
      <div className="login-required-container">
        <div className="login-required-card">
          <div className="login-required-icon">🔒</div>
          <h2 className="login-modal-title">Please login</h2>
          <p className="login-modal-subtitle">You must be logged in to access this page.</p>
          <button 
            onClick={() => navigate('/')} 
            className="login-submit-btn"
            style={{ marginTop: '24px', width: '100%' }}
          >
            Go to Home Page
          </button>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
