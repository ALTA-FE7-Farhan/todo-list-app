import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function ToDoForm(props) {
  const [inputData, setInputData] = useState("");

  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    props.fnAddTodos(inputData);
    setInputData("");
  };

  return (
    <form style={{ margin: "0.5em 0em", display: "flex" }} onSubmit={formOnSubmitHandler}>
      <TextField type="text" style={{ marginRight: "0.5em" }} value={inputData} onChange={inputOnChangeHandler} label="What do you want to do?" helperText="Enter what you want to procastinate" variant="outlined" />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </form>
  );
}
