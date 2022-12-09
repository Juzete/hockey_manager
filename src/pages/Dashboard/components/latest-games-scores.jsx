import { Bar } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider } from '@mui/material';
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
import { useSelector } from 'react-redux';

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

const getScore = (range, team, list) => {
  const result = [];
  const maxRange = list.length < range ? list.length : range;
  for (let i = 0; i < maxRange; i++) {
    result.push(list[i][team]);  
  } 
  return result;
}

const getDates = (range, list) => {
  const result = [];
  const maxRange = list.length < range ? list.length : range;
  for (let i = 0; i < maxRange; i++) {
    result.push(list[i].matchDate)
  }
  return result;
}

export const LatestGamesScores = (props) => {
  const matchesList = useSelector((state) => state.matches.matchesList);
  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: getScore(15, 'ourScore', matchesList),
        label: 'My team',
        maxBarThickness: 20
      },
      {
        backgroundColor: '#c7c7c7',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: getScore(15, 'oponentScore', matchesList),
        label: 'Oponents',
        maxBarThickness: 20
      }
    ],
    labels: getDates(15, matchesList)
  };
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
        }}
      >
      </Box>
    </Card>
  );
};