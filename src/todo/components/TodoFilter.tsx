import { CSSProperties } from '@mui/material/styles/createMixins'
import Button from '@mui/material/Button';
import useTodos from '../hooks/useTodos';

const TodoFilter = () => {

    const { filter } = useTodos();

    const filterStyle: CSSProperties = {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        margin: "20px 0"
    }

  return (
    <div style={filterStyle}>
        <Button variant="contained" onClick={ () => filter("All")}>All</Button>
        <Button variant="contained" onClick={ () => filter("Done")}>Done</Button>
        <Button variant="contained" onClick={ () => filter("Todo")}>Todo</Button>
    </div>
  )
}

export default TodoFilter