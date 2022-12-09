import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Winrate = (props) => {
  const matchesList = useSelector((state) => state.matches.matchesList);
  const theme = useTheme();

  useEffect(() => {
  }, [matchesList])
  
  const getWinrate = () => {
    const result = matchesList.reduce((acc, item) => {
      if (item.ourScore > item.oponentScore) {
        acc++;
      }
      return acc;
    },0);
    const winrate = (result / matchesList.length * 100).toFixed(0);
    return [winrate, 100 - winrate]
  }

  const data = {
    datasets: [
      {
        data: getWinrate(),
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 5,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Win', 'Lose']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader title="Winrate" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            pt: 5
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};