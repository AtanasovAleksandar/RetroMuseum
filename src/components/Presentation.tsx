import React from 'react'

import { ManufactureInfo } from '../components/manufactureInfo';


export const Presentation: React.FC<any>  = ({context}) => {
    return (
        <div className="presentation-container">
            < ManufactureInfo context={context}/>
            <h1 className="presentation-container-year">{context.manufactureYear}</h1>
            <img className="presentation-container-img" src={context.presentationUrl} alt="car"/>
        </div>
    )
}
