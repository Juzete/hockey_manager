import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { PlayersList } from "./components/players-list";
import { Sidebar } from "../Dashboard/components/sidebar";

export default function MatchesPage() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

//   useEffect(() => {
//     if (!auth.isAuth) navigate("/login");
//   }, []);

  return (
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pt: 2,
        ml: 25,
      }}
    >
      <Container maxWidth={false}>
        <PlayersList />
      </Container>
    </Box>
    <Sidebar />
  </>
  );
}
