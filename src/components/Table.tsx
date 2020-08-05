import React, { useState } from "react";
import { EditModal } from "../components/EditModal";

export const Table = ({ owners }) => {
  const [modalActive, setModalActive] = useState(false);
  const [ownerCars, setOwnerCars] = useState(owners);
  const [ownerForEdit, setOwnerForEdit] = useState(null);
  let carOwners: any[] = owners;
  console.log("carOwners", carOwners);

  const onModalClose = () => {
    setModalActive(false);
  };

  const changeUpdatedOwner = (e) => {
    console.log(e);
    ownerCars
      .filter((owner) => owner.id === e.id)
      .map((o) => {
        o.name = e.name;
        o.year = e.year;
        o.country = e.country;
      });
  };

  const getSuggestions = (value) => {
    if (value === "") {
      setOwnerCars(owners);
    } else {
      return carOwners.filter((owner) => checkIfContain(owner, value));
    }
  };

  const checkIfContain = (owner, value) => {
    let contain = owner.name.toUpperCase().includes(value.toUpperCase());
    if (contain) {
      carOwners = [];
      carOwners.push(owner);
      setOwnerCars(carOwners);
      console.log("after push ", carOwners);
    }
  };

  const onSearchTermsEntered = (e) => {
    getSuggestions(e.target.value);
  };

  const onEdit = (owner) => {
    setModalActive(true);
    setOwnerForEdit(owner);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search owner name..."
          onChange={onSearchTermsEntered}
        />
      </div>
      <h2 style={{ marginLeft: "15px" }}>Owners</h2>
      <div className="table-container">
        <table className="owners">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ownerCars.map((owner) => (
              <tr key={owner.id}>
                <td>{owner.name}</td>
                <td>{owner.year}</td>
                <td>{owner.country}</td>
                <td style={{ width: "250px" }}>
                  <button className="edit-btn" onClick={() => onEdit(owner)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalActive ? (
        <EditModal
          forEdit={ownerForEdit}
          onCloseModal={onModalClose}
          editedOwner={changeUpdatedOwner}
        />
      ) : null}
    </>
  );
};
