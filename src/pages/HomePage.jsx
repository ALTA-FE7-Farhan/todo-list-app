import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TodoistApi } from "@doist/todoist-api-typescript";
import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import { Box } from "@mui/material";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const api = new TodoistApi("81837970575771c6c4ae2f1003fba7d4b1c645e9");

  useEffect(() => {
    fetchData();
  }, [todos]);

  const fetchData = async () => {
    api
      .getTasks()
      .then((tasks) => setTodos(tasks))
      .catch((error) => alert(error.toString()));
  };

  const addTodos = (newTodo) => {
    api
      .addTask({
        content: newTodo,
      })
      .then((task) => alert("Add todo successfully"))
      .catch((error) => console.log(error));

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (idTodo) => {
    api
      .closeTask(idTodo)
      .then((isSuccess) => alert("Task completed"))
      .catch((error) => console.log(error));
  };

  const deleteTodo = (idTodo) => {
    api
      .deleteTask(idTodo)
      .then((isSuccess) => alert("Delete todo successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <Typography variant="h5" textAlign={"center"}>
            Todos
          </Typography>
          <ToDoForm fnAddTodos={addTodos} />
          <ToDoTable todos={todos} fnCompleteTodo={completeTodo} fnDeleteTodo={deleteTodo} />
        </Box>
      </Box>
    </>
  );
}
