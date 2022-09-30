import React from "react";
import { Select } from "../Styles/Style";


const CustomSelect = (props) => {
  return (
    <Select onChange={props.onChange}>
      {props.option.map((o) => (
        <option key={o.label} value={o.value} >
          {o.label}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
