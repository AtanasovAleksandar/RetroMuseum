import React from "react";

import { Presentation } from "../components/Presentation";

export const InfoSection: React.FC<any> = ({context}) => {
    console.log(context)

  return (
      <>
        <div className="info-section">
           {/* {car ? <button onClick={}>Back</button> : null} */}
          <h2 style={{ fontSize: "40px" }}>{context?.model}</h2>
          <span>{context?.description}</span>
          <button className="info-button">Owners</button>
        </div>
        <div>
        <Presentation context={context}/>
        </div>
        </>
      )
};
