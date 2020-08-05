import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

import useCustomForm from "../hooks/useCustomForm";

const initialValues = {
  name: "",
  year: "",
  country: "",
  id: "",
};

export const AddForm = ({owners}) => {
  const { addOwner } = useContext(GlobalContext);

  const {
    values,
    handleChange,
    handleSubmit,
  } = useCustomForm({
    initialValues,
    onSubmit: (values) => {
      values.values.id = owners.length
      addOwner(values.values, owners)
      
    },
  });

  return (
    <div style={{ padding: "35px", marginLeft: "165px" }}>
      <h2>Add Owner</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label>Name</label>
          </div>
          <div className="col-75">
            <input 
            type="text" 
            name="name" 
            placeholder="Your name.."
            onChange={handleChange}
            value={values.name}
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
              onChange={handleChange}
              value={values.year}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Country</label>
          </div>
          <div className="col-75">
            <input
              // style={{ width: "102%", height: "35px" }}
              placeholder="Country"
              list="country"
              name="country"
              onChange={handleChange}
              value={values.country}
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
        <div className="row">
          <input style={{width: '120px'}} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
