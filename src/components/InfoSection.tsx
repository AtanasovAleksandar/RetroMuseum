import React, { useState } from "react";

import { Presentation } from "../components/Presentation";
import { Modal } from '../components/Modal';

export const InfoSection: React.FC<any> = ({context}) => {
    console.log(context)
    const [modalActive , setModalActive] = useState(false)

    const onModalClose = () => {
      setModalActive(false)
    }

  return (
      <>
        <div className="info-section">
           {/* {car ? <button onClick={}>Back</button> : null} */}
          <h2 style={{ fontSize: "40px" }}>{context?.model}</h2>
          <span>{context?.description}</span>
          <button className="info-button" onClick={() => setModalActive(true)}>Owners</button>
        </div>
        <div>
        <Presentation context={context}/>
        </div>
        {modalActive ? <Modal context={context} onCloseModal={onModalClose} /> : null}
        </>
      )
};
