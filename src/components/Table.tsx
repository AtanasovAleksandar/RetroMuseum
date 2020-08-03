import React, {useState} from "react";

export const Table = ({ owners }) => {
  const [ownerCars , setOwnerCars ]  = useState(owners)
  let carOwners: any[] = owners
  console.log('carOwners',carOwners)


  const getSuggestions = (value) => {
  
    if (value === '') {
      setOwnerCars(owners)
    } else {
      return carOwners.filter(owner => checkIfContain(owner, value));
    }

  }

  const checkIfContain = (owner, value) => {
    let contain = owner.name.toUpperCase().includes(value.toUpperCase())
      if (contain) {
        carOwners = []
        carOwners.push(owner);
        setOwnerCars(carOwners)
        console.log('after push ', carOwners)
      }
  }
  
  const onSearchTermsEntered = (e) => {
   getSuggestions(e.target.value)
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Type owner name"
          onChange={onSearchTermsEntered}
        />
      </div>
      <table className="owners">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {ownerCars.map((owner) => (
            <tr key={owner.id}>
              <td>{owner.name}</td>
              <td>{owner.year}</td>
              <td>{owner.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
