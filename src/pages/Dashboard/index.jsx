import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "./components/budget";
import { TotalProfit } from "./components/total-profit";
import { TasksProgress } from "./components/task-progress";
import { TotalGamesPlayed } from "./components/total-games-played";
import { LatestGamesScores } from "./components/latest-games-scores";
import { Winrate } from "./components/winrate";
import { Sidebar } from "./components/sidebar";

export default function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ auth });
    if (!auth.isAuth) navigate("/login");
  }, []);

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
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalGamesPlayed sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestGamesScores />
          </Grid>
          
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Winrate sx={{ height: '100%' }} />
          </Grid>
          {/*
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
    <Sidebar />
  </>
  );
}
