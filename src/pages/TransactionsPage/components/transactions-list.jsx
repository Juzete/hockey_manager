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
import TransactionModal from "./transaction-modal";
import { SeverityPill } from './status-pill';
import { useDispatch, useSelector } from 'react-redux';
import { setTransactions } from '../../../store/slices/transactionsSlice';

export const TransactionsList = (props) => {
  const transactionsList = useSelector((state) => state.transactions.transactionsList);
  const dispatch = useDispatch();
  const [currentListToShow, setCurrentListToShow] = useState(transactionsList);
  const [isChecked, setIsChecked] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    handleReset()
  }, [transactionsList])
  
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
    dispatch(setTransactions(transactionsList.filter((item) => isChecked.indexOf(item.id) === -1)))
  }

  const handleEdit = () => (e) => {
    setModalId(e.target.id);
    setModalType("edit");
    setModalIsOpen(true);
  }

  const handleReset = () => {
    setCurrentListToShow(transactionsList)
  }

  const handleProfits = () => {
    setCurrentListToShow(transactionsList.filter((item) => item.type === "inc"));
  }

  const handleMostProfit = () => {
    let result = transactionsList[0];
    transactionsList.forEach(item => {
      if (item.type === "inc" && result.type === "dec") {
        result = item;
      } else if (result.type === "dec" && item.type === "dec" && result.amount > item.amount) {
        result = item;
      } else if (item.amount > result.amount) {
        result = item;
      }
    })
    setCurrentListToShow([result]);
  }

  return (
    <>
    <TransactionModal 
      modalIsOpen={modalIsOpen} 
      setModalIsOpen={setModalIsOpen} 
      modalType={modalType} 
      modalId={modalId}/>
    <Card {...props}>
      <CardHeader title="Transactions list" />
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
          onClick={handleProfits}
        >
          Increase
        </Button>
        <Button
          color="primary"
          size="small"
          variant="contained"
          onClick={handleMostProfit}
        >
          Most Profit
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
                  Description
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell> 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentListToShow.map((transaction) => (
                <TableRow
                  hover
                  key={transaction.id}
                >
                  <TableCell>
                  <Checkbox onChange={handleCheckbox()} id={transaction.id}/>
                  </TableCell>
                  <TableCell>
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    {transaction.date}
                  </TableCell>
                  <TableCell>
                    {`${transaction.amount}$`}
                  </TableCell>
                  <TableCell>
                  <SeverityPill
                      color={(transaction.type === "inc" ? 'success' : 'error')}
                    >
                      {transaction.type === "inc" ? "Increase" : "Decrease"}
                    </SeverityPill>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      size="small"
                      variant="contained"
                      id={transaction.id}
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
  