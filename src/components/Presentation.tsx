import React from 'react'

import { ManufactureInfo } from '../components/manufactureInfo';


export const Presentation: React.FC<any>  = ({context}) => {
    return (
        <div className="presentation-container">
            < ManufactureInfo context={context}/>
            <img className="presentation-container-img" src={context.presentationUrl} alt="car"/>
        </div>
    )
}
