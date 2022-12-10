import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import PlayerModal from "./player-modal";
import { useDispatch, useSelector } from 'react-redux';
import { setPlayers } from '../../../store/slices/playersSlice';
   

export const PlayersList = (props) => {
  const playersList = useSelector((state) => state.players.playersList);
  const [currentListToShow, setCurrentListToShow] = useState(playersList);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    handleReset()
  }, [playersList])
  
  useEffect(() => {
  }, [currentListToShow])

  const handleCheckbox = () => (e) => {
    console.log(e.target.id)
    if (e.target?.checked) {
      setIsChecked((prevState) => [...prevState, e.target.id]);
    } else {
      setIsChecked((prevState) => 
        prevState.filter((item) => item !== e.target.id)
      );
    }
  }

  const handleAdd = () => {
    setModalType("set")
    setModalIsOpen(true);
  }

  const handleDelete = () => {
    dispatch(setPlayers(playersList.filter((item) => isChecked.indexOf(item.id) === -1)))
  }

  const handleEdit = () => (e) => {
    setModalId(e.target.id);
    setModalType("edit");
    setModalIsOpen(true);
  }

  const handleReset = () => {
    setCurrentListToShow(playersList)
  }
 
  const handleDefenders = () => {
    setCurrentListToShow(playersList.filter((item) => item.role === "Defender" || item.role === "defender"));
  }

  const handleSalary = () => {
    setCurrentListToShow(playersList.filter((item) => item.salary > 3000));
  }

  return (
    <>
    <PlayerModal 
      modalIsOpen={modalIsOpen} 
      setModalIsOpen={setModalIsOpen} 
      modalType={modalType} 
      modalId={modalId}/>
    <Card {...props}>
      <CardHeader title="Players list" />
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '450px',
        }}
      >
        <Button
          color="success"
          size="small"
          variant="contained"
          onClick={handleAdd}
        >
          Add
        </Button>
        <Button
          color="error"
          size="small"
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleDefenders}
        >
          Defenders
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleSalary}
        >
          Salary &gt; 3000
        </Button>
      </Box>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Number
                </TableCell>
                <TableCell>
                  Position
                </TableCell>
                <TableCell>
                  Salary
                </TableCell>
                <TableCell>
                  Invitation Date
                </TableCell>
                <TableCell> 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentListToShow.map((player) => (
                <TableRow
                  hover
                  key={player.id}
                >
                  <TableCell>
                  <Checkbox onChange={handleCheckbox()} id={player.id}/>
                  </TableCell>
                  <TableCell>
                    {player.name}
                  </TableCell>
                  <TableCell>
                    {player.number}
                  </TableCell>
                  <TableCell>
                    {player.role}
                  </TableCell>
                  <TableCell>
                    {`${player.salary}$`}
                  </TableCell>
                  <TableCell>
                    {player.inviteDate}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      size="small"
                      variant="contained"
                      id={player.id}
                      onClick={handleEdit()}
                      >
                      Edit
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
  </Card>
  </>
);
}
  