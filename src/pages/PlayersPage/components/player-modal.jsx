import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Divider, FormLabel, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { editPlayers, setPlayers } from "../../../store/slices/playersSlice";

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

const PlayersModal = ({modalIsOpen, setModalIsOpen, modalType, modalId}) => {
  const playersList = useSelector((state) => state.players.playersList);
  const dispatch = useDispatch()

  const handleClose = () => setModalIsOpen((prev) => !prev);

  const editPlayer = (id, playersList, payload) => {
    console.log(id, playersList, payload);
    const playerIndex = playersList.findIndex(
      item => item.id === id
    );
    console.log({playerIndex});
    dispatch(editPlayers({index: playerIndex, player: payload}))
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    secondName: "",
    number: "",
    salary: "",
    inviteDate: "",
    role: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      handleClose();
      if (modalType === "set") {
        const resultObj = { 
          id: uuidv4(), 
          name: `${values.lastName} ${values.firstName} ${values.secondName}`,
          ...values 
        };
        console.log(resultObj);
        dispatch(setPlayers([...playersList, resultObj]));
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
        const setName = () => {
          console.log(values)
          if (values.firstName && values.secondName && values.lastName) val.name = 
          `${values.lastName} ${values.firstName} ${values.secondName}`
        }
        setName();
        const result = {
          id: modalId,
          ...val,
        };
        editPlayer(modalId, playersList, result);
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
              <FormLabel htmlFor="lastName" sx={{ m: 0, p: 0 }}>
                Last Name
              </FormLabel>
              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                required={modalType === "set"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="firstName" sx={{ m: 0, p: 0 }}>
                First Name
              </FormLabel>
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                required={modalType === "set"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="secondName" sx={{ m: 0, p: 0 }}>
                Second Name
              </FormLabel>
              <TextField
                id="secondName"
                name="secondName"
                label="Second Name"
                variant="outlined"
                value={formik.values.secondName}
                onChange={formik.handleChange}
                required={modalType === "set"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="number" sx={{ m: 0, p: 0 }}>
                Player Namber
              </FormLabel>
              <TextField
                id="number"
                name="number"
                label="Player Number"
                variant="outlined"
                value={formik.values.number}
                onChange={formik.handleChange}
                required={modalType === "set"}
                type={"number"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="role" sx={{ m: 0, p: 0 }}>
                Player Position
              </FormLabel>
              <TextField
                id="role"
                name="role"
                label="Player Position"
                variant="outlined"
                value={formik.values.role}
                onChange={formik.handleChange}
                required={modalType === "set"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="salary" sx={{ m: 0, p: 0 }}>
                Salary
              </FormLabel>
              <TextField
                id="salary"
                name="salary"
                label="Salary"
                variant="outlined"
                value={formik.values.salary}
                onChange={formik.handleChange}
                required={modalType === "set"}
                type={"number"}
              />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="inviteDate" sx={{ m: 0, p: 0 }}>
                Invitation Date
              </FormLabel>
              <TextField
                id="inviteDate"
                name="inviteDate"
                variant="outlined"
                value={formik.values.inviteDate}
                onChange={formik.handleChange}
                required={modalType === "set"}
                type={"date"}
                sx={{width: 195 }}
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

export default PlayersModal;