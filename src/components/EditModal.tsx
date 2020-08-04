import React, { useState } from "react";

export const EditModal = ({ forEdit , onCloseModal, editedOwner}) => {

  const [state, setState] = React.useState({
    id: forEdit?.id,
    name: forEdit?.name,
    year: forEdit?.year,
    country: forEdit?.country,
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const UpdateOwner = () => {
    editedOwner(state)
    onCloseModal()
    console.log(state);
  };

  return (
    <div className="modal-edit">
      <button className="modal-edit-btn-close btn-close-modal" onClick={onCloseModal}>Close</button>
      <form style={{ marginLeft: "67px", marginTop: "75px" }}>
        <div className="row">
          <div className="col-25">
            <label>Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="name"
              placeholder="Your name.."
              value={state.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Year</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="year"
              placeholder="Year of ownership"
              value={state.year}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Country</label>
          </div>
          <div className="col-75">
            <input
              style={{ width: "102%", height: "35px" }}
              placeholder="Country"
              list="country"
              name="country"
              value={state.country}
              onChange={handleChange}
            />
            <datalist id="country">
              <option value="Macedonia" />
              <option value="Germany" />
              <option value="USA" />
              <option value="Italy" />
              <option value="Russia" />
            </datalist>
          </div>
        </div>
        <div className="row"></div>
      </form>
      <button className="btn-update" onClick={() => UpdateOwner()}>Update</button>
    </div>
  );
};
