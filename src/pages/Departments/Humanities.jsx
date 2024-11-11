import React, { useState } from 'react';
import './style.css'

export default function Humanities() {

    const staffMembers = [
        { name: 'V Jaya', role: 'Hostel Manager', image: 'path/to/image1.jpg' },
        { name: 'J.Bharathi', role: 'Junior Assistant', image: 'path/to/image2.jpg' },
        { name: 'Shaik. Jaffer Sadiq', role: 'Junior Assistant', image: 'path/to/image3.jpg' },
        { name: 'V.MURALI MOHAN', role: 'Junior Assistant', image: 'path/to/image4.jpg' },
      ];

      const [activeTab, setActiveTab] = useState('Faculty');

  return (
     <div className="civil-engineering-department">
     <h1 className="left-aligned-heading">Department of Humanities</h1>
      <div className="breadcrumb">
        <p>Home / Departments / Department of Humanities</p>
      </div>

      <div className="nav-tabs">
        <button 
          className={`tab ${activeTab === 'About' ? 'active' : ''}`} 
          onClick={() => setActiveTab('About')}
        >
          About
        </button>
        <button 
          className={`tab ${activeTab === 'Faculty' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Faculty')}
        >
          Faculty
        </button>
        <button 
          className={`tab ${activeTab === 'Labs' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Labs')}
        >
          Labs
        </button>
        <button 
          className={`tab ${activeTab === 'Events' ? 'active' : ''}`} 
          onClick={() => setActiveTab('Events')}
        >
          Events
        </button>
      </div>

      {activeTab === 'Faculty' && (
        <div className="staff-container">
          {staffMembers.map((member, index) => (
            <div className="staff-card" key={index}>
              <img src={member.image} alt={member.name} className="staff-image" />
              <div className="staff-info">
                <p className="staff-role">{member.role}</p>
                <p className="staff-name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Add additional content for other tabs here if needed */}
    </div>
  )
}
