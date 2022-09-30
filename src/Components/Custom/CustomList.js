import React from "react";
import { Button, Input } from "../Styles/Style";

const CustomList = (props) => {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {props.words?.slice(props.min, props.max).map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
      <form onSubmit={props.onSubmit}>
        <Input
          style={{ width: "50px" }}
          type="number"
          value={props.value}
          onChange={props.onChange}
          max={props.words.length / 50}
        />
        <Button style={{margin:"0px"}} type="submit">Go to page</Button>
      </form>
    </div>
  );
};

export default CustomList;
