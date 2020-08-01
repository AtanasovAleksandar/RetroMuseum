import React from 'react'

import { ManufactureInfo } from '../components/manufactureInfo';


export const Presentation: React.FC<any>  = ({imgUrl}) => {
    return (
        <div className="presentation-container">
            < ManufactureInfo />
            <img className="presentation-container-img" src={imgUrl} alt="car"/>
        </div>
    )
}
