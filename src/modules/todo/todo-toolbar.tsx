import { TTodo } from "@/types/todo";
import { Box, Button, Stack, Typography } from "@mui/material";


type Props = {
  setTodoList: React.Dispatch<React.SetStateAction<TTodo[]>>
  todoList: TTodo[]
}

export default function TodoToolbar({setTodoList, todoList}: Props) {
  const handleClearAll = () => {
    setTodoList([])
  }
  return (
    <Stack direction={'row'} alignItems={'center'} spacing={3}>
           <Box >
            {todoList.length 
            ?  <Typography fontFamily={'inter'}>You have {todoList.length} pending tasks</Typography>
            : <Typography fontFamily={'inter'}>No pending tasks</Typography>
            }
            </Box>
            {!!todoList.length && <Button 
              variant={'contained'} 
              onClick={handleClearAll}
              sx={{
                backgroundColor: "#673ab7 !important",
                p: 1,
                letterSpacing: 0.5,
                fontFamily:'inter',
                textTransform: 'capitalize'
              
              }}>Clear All</Button> 
            }
           
    </Stack>
  )

}