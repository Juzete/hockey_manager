import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import { useSelector } from 'react-redux';

export const TasksProgress = (props) => {
  const playersList = useSelector((state) => state.players.playersList);
  const transactionsList = useSelector((state) => state.transactions.transactionsList);

  const getProfit = () => {
    let result = 0;
    transactionsList.forEach((transaction) => {
      if (transaction.type === 'inc') result += transaction.amount;
    })
    return result.toFixed(0);
  }

  const setTask = () => {
    let allSalaryes = 0;
    playersList.forEach((player) => allSalaryes += player.salary)
    return (getProfit() / (allSalaryes * 1.4) * 100).toFixed(2);
  }

  return(
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TASKS PROGRESS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {setTask()}%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={setTask()}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
)};