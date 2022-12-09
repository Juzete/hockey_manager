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
import TransactionModal from "./transaction-modal";
import { SeverityPill } from './status-pill';


export let transactionsDb = [
  {
    id: uuidv4(),
    description: 'Buy equipment',
    type: "dec",
    amount: 2850,
    date: '20/03/2019'
  },
  {
    id: uuidv4(),
    description: 'Advertise payments',
    type: "inc",
    amount: 12000,
    date: '01/04/2019'
  },
  {
    id: uuidv4(),
    description: 'Away game spending',
    type: "dec",
    amount: 1100,
    date: '03/04/2019'
  },
];

export const TransactionsList = (props) => {
  const [isChecked, setIsChecked] = useState([]);
  const [transactions, setTransactions] = useState(transactionsDb);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
  }, [transactions])
  

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
    console.log(transactions)
    setTransactions(transactions.filter((item) => isChecked.indexOf(item.id) === -1));
  }

  const handleEdit = () => (e) => {
    setModalId(e.target.id);
    setModalType("edit");
    setModalIsOpen(true);
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
              {transactionsDb.map((transaction) => (
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
  