import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Divider, FormLabel, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { matchesDb } from "./matches-list";

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

const MatchesModal = ({modalIsOpen, setModalIsOpen, modalType, modalId}) => {
  const handleClose = () => setModalIsOpen((prev) => !prev);

  const editMatch = (id, matchList, payload) => {
    console.log(id, matchList, payload);
    const matchIndex = matchList.findIndex(
      item => item.id === id
    );
    console.log({matchIndex});
    matchesDb[matchIndex] = {
      ...matchList[matchIndex],
      ...payload,
    }
  }

  const initialValues = {
    oponents: "",
    ourScore: "",
    oponentScore: "",
    matchDate: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      handleClose();
      if (modalType === "set") {
        const resultObj = { 
          id: uuidv4(), 
          ...values 
        };
        console.log(resultObj);
        matchesDb.push(resultObj);
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
          ...val,
        };
        editMatch(modalId, matchesDb, result);
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
              <FormLabel htmlFor="oponent" sx={{ m: 0, p: 0 }}>
                Oponents Team Name
              </FormLabel>
              <TextField
                id="oponent"
                name="oponent"
                label="Oponents Team Name"
                variant="outlined"
                value={formik.values.oponent}
                onChange={formik.handleChange}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="ourScore" sx={{ m: 0, p: 0 }}>
                Our Team Score
              </FormLabel>
              <TextField
                id="ourScore"
                name="ourScore"
                label="Our Team Score"
                variant="outlined"
                value={formik.values.ourScore}
                onChange={formik.handleChange}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="oponentScore" sx={{ m: 0, p: 0 }}>
                Oponents Team Score
              </FormLabel>
              <TextField
                id="oponentScore"
                name="oponentScore"
                label="Oponents Team Score"
                variant="outlined"
                value={formik.values.oponentScore}
                onChange={formik.handleChange}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="matchDate" sx={{ m: 0, p: 0 }}>
                Date
              </FormLabel>
              <TextField
                id="matchDate"
                name="matchDate"
                label="DD/MM/YYYY"
                variant="outlined"
                value={formik.values.matchDate}
                onChange={formik.handleChange}
              />
            </FieldWrapper>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ ml: 1 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MatchesModal;