import React from 'react'

export const ManufactureInfo = ({context}) => {
    console.log(context)
    return (
        <div className="manufacture-info">
            <div>
                <h2>{context.manufactureYear}</h2>
                <span>Manufacture Year</span>
            </div>
            <div>
                <h2>{context.horsePower}</h2>
                <span>Horse Power</span>
            </div>
            <div>
                <h2>{context.cubics}</h2>
                <span>Cubics</span>
            </div>
        </div>
    )
}
