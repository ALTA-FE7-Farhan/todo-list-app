import React from "react";
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { Link } from "react-router-dom";

export default function ToDoTable(props) {
  const btnCompleteOnClickHandler = (todoId) => {
    props.fnCompleteTodo(todoId);
  };

  const btnDeleteOnClickHandler = (todoId) => {
    props.fnDeleteTodo(todoId);
  };
  return (
    <Table sx={{ maxWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Status</TableCell>
          <TableCell colSpan={2}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>
              <Link to={`/detail/${todo.id}`}>{todo.content}</Link>
            </TableCell>
            <TableCell>{todo.completed ? "Completed" : "Not Completed"}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Button variant="contained" disabled>
                  Complete
                </Button>
              ) : (
                <Button variant="contained" onClick={() => btnCompleteOnClickHandler(todo.id)}>
                  Complete
                </Button>
              )}
            </TableCell>
            <TableCell>
              <Button variant="contained" color="error" onClick={() => btnDeleteOnClickHandler(todo.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
