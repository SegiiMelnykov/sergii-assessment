import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TTodo } from "@/types/todo";

type Props = {
  addTodo: React.Dispatch<React.SetStateAction<TTodo[]>>;
}

export default function AddTodoItem({addTodo}:Props) {
  const [todo, setTodo] = useState('')
  const handleAddTodo = () => {

    addTodo((prev:TTodo[]) => [
      ...prev, 
          {
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        title: todo
      }
      ])
    setTodo('')
  }
  return (
    <Stack direction={'row'} >
      <TextField value={todo} onChange={(e)=> setTodo(e.target.value)} size="small" fullWidth placeholder="Add your new todo" />
      <IconButton
        disabled={todo.length <3}
        size="small"
        sx={{
          ml: '5px',
          backgroundColor: "#673ab7 !important",
          borderRadius: '5px',
        }}

        onClick={handleAddTodo}
      >
        <AddIcon sx={{color: 'white', fontSize: '30px',
}} />
      </IconButton>
    </Stack>
  )

}