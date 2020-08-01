import React from 'react'

export const InfoSection: React.FC<any> = ({title, details}) => {
    return (
        <div className="info-section">
            <h2 style={{fontSize: '40px'}}>{title}</h2>
            <span>{details}</span>
            <button className="info-button">Learn More</button>
        </div>
    )
}
