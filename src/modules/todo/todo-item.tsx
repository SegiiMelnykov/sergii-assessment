import { TTodo } from "@/types/todo";
import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


type TProps = {
  todo: TTodo
  removeTodo: React.Dispatch<React.SetStateAction<TTodo[]>>
}

export default function TodoItem({todo, removeTodo}:TProps) {
  const [show, setShow] = useState(false);
  const handleRemoveTodo = () => {
    removeTodo(todoList => todoList.filter(item => item.id !== todo.id))
  }
  return (
    <Card sx={{
      width: '100%',
      backgroundColor: 'grey.200',
      boxShadow: 'none',
    }}
    onMouseOver={() => setShow(true)}
    onMouseOut={() => setShow(false)}
    >
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box alignItems={'center'}  pl={2}>
          <Typography 
            sx={{display: 'flex', alignItems: 'center'}}
            height={40}
            variant='body1'
            fontFamily={'inter'}
        >
          {todo.title}
        </Typography>
        </Box>
        {show && <IconButton
        color="error"
        onClick={handleRemoveTodo}
        sx={{
          backgroundColor: "red !important",
          borderRadius: 0
        }}
        >
          <DeleteIcon sx={{color: 'white'}}/>
        </IconButton>}
      </Stack>
    </Card>
  )

}