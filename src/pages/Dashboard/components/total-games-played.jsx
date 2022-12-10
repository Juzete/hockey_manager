import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import GamesIcon from '@mui/icons-material/GamesTwoTone';
import { useSelector } from 'react-redux';

export const TotalGamesPlayed = (props) => {
  const matchesList = useSelector((state) => state.matches.matchesList)

  return (
  <Card {...props}>
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
            TOTAL GAMES PLAYED
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {matchesList.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <GamesIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >

      </Box>
    </CardContent>
  </Card>
)};