import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Divider, FormLabel, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { transactionsDb } from "./transactions-list";
import { useState } from "react";

const boxStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

 const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px;
`;

const TransactionsModal = ({modalIsOpen, setModalIsOpen, modalType, modalId}) => {
  const [transactionType, setTransactionType] = useState(null)
  const handleClose = () => setModalIsOpen((prev) => !prev);
  const handleSubmit = (type) => () => setTransactionType(type);

  const editTransaction = (id, transactionsList, payload) => {
    console.log(id, transactionsList, payload);
    const transactionIndex = transactionsList.findIndex(
      item => item.id === id
    );
    console.log({transactionType});
    transactionsDb[transactionIndex] = {
      ...transactionsList[transactionIndex],
      ...payload,
    }
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    secondName: "",
    number: "",
    salary: "",
    inviteDate: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      handleClose();
      if (modalType === "set") {
        const resultObj = { 
          id: uuidv4(), 
          type: transactionType,
          ...values 
        };
        console.log(resultObj);
        transactionsDb.push(resultObj);
        actions.resetForm({
          values: initialValues,
        });
      } else if (modalType === "edit") {
        const setExistVal = () => {
          let temp = {};
          for (const key in values) {
            if (values[key]) temp = { ...temp, ...{ [key]: values[key] } };
          }
          return temp;
        };
        const val = setExistVal();
        const result = {
          id: modalId,
          type: transactionType,
          ...val,
        };
        editTransaction(modalId, transactionsDb, result);
      //  dispatch(editLiquid(result));
        actions.resetForm({
          values: initialValues,
        });
      }
    },
  });

  return (
    <div>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyles}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            mb="20px"
          >
            {modalType === "edit" ? "EDIT" : "ADD"}
          </Typography>
          <Divider sx={{ mb: 5 }} />
          <form onSubmit={formik.handleSubmit}>
          <FieldWrapper>
              <FormLabel htmlFor="description" sx={{ m: 0, p: 0 }}>
                Description
              </FormLabel>
              <TextField
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                value={formik.values.description}
                onChange={formik.handleChange}
                required={modalType === "set"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="date" sx={{ m: 0, p: 0 }}>
                Date
              </FormLabel>
              <TextField
                id="date"
                name="date"
                variant="outlined"
                value={formik.values.date}
                onChange={formik.handleChange}
                required={modalType === "set"}
                type={"date"}
                sx={{ width: 195}}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="amount" sx={{ m: 0, p: 0 }}>
                Amount
              </FormLabel>
              <TextField
                id="amount"
                name="amount"
                label="Amount"
                variant="outlined"
                value={formik.values.amount}
                onChange={formik.handleChange}
                required={modalType === "set"}
                type={"number"}
              />
            </FieldWrapper>
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ ml: 1 }}
                onClick={handleSubmit("inc")}
              >
                Increase
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="error"
                sx={{ ml: 1 }}
                onClick={handleSubmit("dec")}
              >
                Decrease
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default TransactionsModal;