import React from "react";
import { Box, Container } from "@mui/material";
import { TransactionsList } from "./components/transactions-list";
import { Sidebar } from "../Dashboard/components/sidebar";
import { useAuth } from "../../hooks/use-auth";

export default function TransactionsPage() {
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
        <TransactionsList />
      </Container>
    </Box>
    <Sidebar />
  </>
  );
}
