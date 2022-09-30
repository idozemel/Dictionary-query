import React from "react";
import Store from "../../Store";
import { observer } from "mobx-react";
import CustomForm from "../Custom/CustomForm";
import CustomList from "../Custom/CustomList";
import {
  Button,
  Card,
  Hr,
  Input,
  Label,
  P,
} from "../Styles/Style";
var words = require("an-array-of-english-words"); // an array of english words :) total words 274937

const LoadingPage = () => {
  return (
    <Card> 
      <CustomForm
        onSubmit={(e) => {
          e.preventDefault();
          Store.allFuncs(Store.case, words);
        }}
        label="Please pick a query  "
        value={Store.letter}
        caseChange={(e) => Store.setCase(e.target.value)}
        case={Store.case}
        options={Store.options}
        onChange={(e) => Store.setLetter(e.target.value)}
        count={Store.count}
        flag={Store.flagA}
      />
      <Hr></Hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Store.wordConjunction(words);
        }}
      >
        <Label>Conjuction</Label>
        <Input
          type="input"
          value={Store.word}
          onChange={(e) => Store.setWord(e.target.value)}
        />
        <Button type="submit">Conjuct.</Button>
      </form>
      {Store.flagB && (
        <P>
          The number of conjuctions in the wordg "{Store.word}" is <strong>{Store.conjuct}</strong>
        </P>
      )}
      <Hr></Hr>
      <br></br>
      <h1>List of words :)</h1>
      <CustomList
        words={words}
        onSubmit={(e) => {
          e.preventDefault();
          Store.choosePage();
        }}
        min={Store.min}
        max={Store.max}
        value={Store.page}
        onChange={(e) => Store.setPage(e.target.value)}
      />
    </Card>
  );
};

export default observer(LoadingPage);
