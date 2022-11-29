import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const data = {
  datasets: [
    {
      backgroundColor: '#3F51B5',
      barPercentage: 0.5,
      barThickness: 12,
      borderRadius: 4,
      categoryPercentage: 0.5,
      data: [3, 5, 1, 6, 1, 2, 3],
      label: 'My team',
      maxBarThickness: 20
    },
    {
      backgroundColor: '#c7c7c7',
      barPercentage: 0.5,
      barThickness: 12,
      borderRadius: 4,
      categoryPercentage: 0.5,
      data: [2, 3, 2, 5, 2, 3, 1],
      label: 'Oponents',
      maxBarThickness: 20
    }
  ],
  labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 aug']
};



export const LatestGamesScores = (props) => {
  return (
    <Card {...props}>
      <CardHeader
        title="Latest Games Scores"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
      </Box>
    </Card>
  );
};