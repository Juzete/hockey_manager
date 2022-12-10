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
import MatchesModal from './matches-modal';
import { SeverityPill } from './status-pill';
import { useDispatch, useSelector } from 'react-redux';
import { setMatches } from '../../../store/slices/matchesSlice';


export const MatchesList = (props) => {
  const matchesList = useSelector((state) => state.matches.matchesList);
  const dispatch = useDispatch();
  const [currentListToShow, setCurrentListToShow] = useState(matchesList);
  const [isChecked, setIsChecked] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    handleReset()
  }, [matchesList])
  
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
    dispatch(setMatches(matchesList.filter((item) => isChecked.indexOf(item.id) === -1)))
  }

  const handleEdit = () => (e) => {
    setModalId(e.target.id);
    setModalType("edit");
    setModalIsOpen(true);
  }

  const handleReset = () => {
    setCurrentListToShow(matchesList)
  }
 
  const handleWins = () => {
    setCurrentListToShow(matchesList.filter((item) => item.ourScore >  item.oponentScore));
  }

  const handleGtScore = () => {
    setCurrentListToShow(matchesList.filter((item) => (item.ourScore + item.oponentScore) > 5));
  }

  const handleMaxScore = () => {
    let result = {};
    matchesList.forEach(item => {
      if ((item.ourScore + item.oponentScore) > (result.ourScore + result.oponentScore)) {
        result = item;
      }
    })
    setCurrentListToShow([result]);
  };

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
          maxWidth: '500px',
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
          onClick={handleWins}
        >
          Wins
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleGtScore}
        >
          Score &gt; 5
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleMaxScore}
        >
          Max Score
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
                  Result
                </TableCell>
                <TableCell> 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentListToShow
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
                    <SeverityPill
                      color={(match.ourScore > match.oponentScore ? 'success' : 'error')}
                    >
                      {match.ourScore > match.oponentScore ? "Win" : "Defeat"}
                    </SeverityPill>
                  </TableCell>
                  <TableCell>
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
  