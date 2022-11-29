import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

export const Winrate = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [64, 36],
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

  const devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMacIcon,
      color: '#3F51B5'
    },
    {
      title: 'Tablet',
      value: 15,
      icon: TabletIcon,
      color: '#E53935'
    },
    {
      title: 'Mobile',
      value: 23,
      icon: PhoneIcon,
      color: '#FB8C00'
    }
  ];

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