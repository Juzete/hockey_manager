import React from "react";
import { Box, Container } from "@mui/material";
import { MatchesList } from "./components/matches-list";
import { Sidebar } from "../Dashboard/components/sidebar";
import { useAuth } from "../../hooks/use-auth";

export default function MatchesPage() {
  useAuth();
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
        <MatchesList />
      </Container>
    </Box>
    <Sidebar />
  </>
  );
}
