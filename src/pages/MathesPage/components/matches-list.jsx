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
import MatchesModal from './matches-modal';
import MatchesPage from '..';


export let matchesDb = [
  {
    id: uuidv4(),
    oponent: 'Walkers',
    ourScore: 3,
    oponentScore: 5,
    matchDate: '20/04/2019'
  },
  {
    id: uuidv4(),
    oponent: 'Coroline',
    ourScore: 1,
    oponentScore: 2,
    matchDate: '25/04/2019'
  },
  {
    id: uuidv4(),
    oponent: 'New Jersey',
    ourScore: 1,
    oponentScore: 2,
    matchDate: '25/04/2019'
  },
];

export const MatchesList = (props) => {
  const [isChecked, setIsChecked] = useState([]);
  const [matches, setMatches] = useState(matchesDb);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
  }, [matches])
  

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
    console.log(matches)
    setMatches(matches.filter((item) => isChecked.indexOf(item.id) === -1));
  }

  const handleEdit = () => (e) => {
    setModalId(e.target.id);
    setModalType("edit");
    setModalIsOpen(true);
  }

  return (
    <>
    <MatchesModal 
      modalIsOpen={modalIsOpen} 
      setModalIsOpen={setModalIsOpen} 
      modalType={modalType} 
      modalId={modalId}/>
    <Card {...props}>
      <CardHeader title="Matches list" />
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
                  Oponents
                </TableCell>
                <TableCell>
                  Score (Our/oponent)
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell> 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {matches
              .map((match) => (
                <TableRow
                  hover
                  key={match.id}
                >
                  <TableCell>
                  <Checkbox onChange={handleCheckbox()} id={match.id}/>
                  </TableCell>
                  <TableCell>
                    {match.oponent}
                  </TableCell>
                  <TableCell>
                    {`${match.ourScore}:${match.oponentScore}`}
                  </TableCell>
                  <TableCell>
                    {match.matchDate}
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
                      color="primary"
                      size="small"
                      variant="contained"
                      id={match.id}
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
  