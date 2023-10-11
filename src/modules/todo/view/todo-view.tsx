import { Card, Stack, Typography } from "@mui/material";
import AddTodoItem from "../add-todo";
import TodoToolbar from "../todo-toolbar";
import TodoList from "../todo-list";
import { useState } from "react";
import { TTodo } from "@/types/todo";
import data from "./../../../pages/api/datastore/collection.json"


export default function TodoView() {
  const [todoList, setTodoList] = useState<TTodo[]>([...data.todoList]);



  return (
    <Stack alignItems={'center'} justifyContent={'center'} mt={5}>
      <Card  sx={{ p: 3}}>
        <Stack spacing={3}>
        <Typography variant="h1" fontSize={32}>Todo App</Typography>
        <AddTodoItem addTodo={setTodoList} />
        <TodoList todoList={todoList} removeTodo={setTodoList} />
        <TodoToolbar setTodoList={setTodoList} todoList={todoList} />
        </Stack>
      </Card>
  </Stack>);
}