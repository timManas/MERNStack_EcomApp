import React from "react";
import "./form-input.styles.scss";

// Note the terninary operation here "?". It happens twice
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? "shrink" : ""}form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput