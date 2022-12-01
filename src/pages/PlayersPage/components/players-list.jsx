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
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import PlayerModal from "./player-modal";


export let playersDb = [
  {
    id: uuidv4(),
    name: 'Clarke Gillebert',
    number: 56,
    salary: 2000,
    inviteDate: '20/04/2019'
  },
  {
    id: uuidv4(),
    name: 'Cao Yu',
    number: 32,
    salary: 2300,
    inviteDate: '22/02/2019'
  },
  {
    id: uuidv4(),
    name: 'Anje Keizer',
    number: 43,
    salary: 3200,
    inviteDate: '20/05/2019'
  },
];

export const PlayersList = (props) => {
  const [isChecked, setIsChecked] = useState([]);
  const [players, setPlayers] = useState(playersDb);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
  }, [players])
  

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
    console.log(isChecked)
    console.log(players)
    setPlayers(players.filter((item) => isChecked.indexOf(item.id) === -1));
  }

  const handleEdit = () => (e) => {
    setModalId(e.target.id);
    setModalType("edit");
    setModalIsOpen(true);
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
          maxWidth: '150px',
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
                  Salary
                </TableCell>
                <TableCell>
                  Invitation date
                </TableCell>
                <TableCell> 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
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
                    {player.salary}
                  </TableCell>
                  <TableCell>
                    {player.inviteDate}
                  </TableCell>
                  <TableCell>
                    {/* <SeverityPill
                      color={(order.status === 'delivered' && 'success')
                      || (order.status === 'refunded' && 'error')
                      || 'warning'}
                    >
                      {order.status}
                    </SeverityPill> */}
                    <Button
                      color="secondary"
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
  