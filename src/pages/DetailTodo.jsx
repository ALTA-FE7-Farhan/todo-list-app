import React, { useState, useEffect } from "react";
import { TodoistApi } from "@doist/todoist-api-typescript";
import { useParams } from "react-router-dom";

const DetailTodo = (props) => {
  const api = new TodoistApi("81837970575771c6c4ae2f1003fba7d4b1c645e9");
  let params = useParams();
  const [detailTodo, setDetailTodo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    api
      .getTask(parseInt(params.todoId))
      .then((task) => setDetailTodo(task))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{detailTodo.content}</div>;
};

export default DetailTodo;
