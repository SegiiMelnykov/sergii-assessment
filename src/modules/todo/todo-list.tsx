import { Box, Button, Stack, Typography } from "@mui/material";
import TodoItem from "./todo-item";
import { TTodo } from "@/types/todo";


type Props = {
  todoList: TTodo[]
  removeTodo: React.Dispatch<React.SetStateAction<TTodo[]>>
}

export default function TodoList({todoList, removeTodo}:Props) {
  
  
  return (
    <Stack  alignItems={'center'} spacing={1}>
          {todoList.map((item) => (
           <TodoItem todo={item}  key={item.id} removeTodo={removeTodo} />
          ))}
    </Stack>
  )

}