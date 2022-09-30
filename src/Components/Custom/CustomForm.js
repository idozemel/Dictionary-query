import React from "react";
import { Button, Input, Label, P } from "../Styles/Style";
import CustomSelect from "./CustomSelect";

const CustomForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <Label>{props.label}</Label>
      <CustomSelect
        onChange={props.caseChange}
        option={props.options}
        case={props.case}
      />
      <Input
        type="input"
        maxLength="1"
        value={props.value}
        onChange={props.onChange}
      />
      <Button type="submit">Seach</Button>

      {props.flag && <P>The letter "{props.value}" appears <strong>{props.count}</strong> times.</P>}
    </form>
  );
};

export default CustomForm;
