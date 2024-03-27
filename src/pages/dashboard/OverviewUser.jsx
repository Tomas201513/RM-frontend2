import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart } from 'react-minimal-pie-chart';
import UserContext from '../../context/UserContext';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import { BarChart as BarChart2, Bar as Bar2, XAxis as XAxis2, YAxis as YAxis2, CartesianGrid as CartesianGrid2, Tooltip as Tooltip2, Legend as Legend2 } from 'recharts';
import { PieChart as PieChart2 } from 'react-minimal-pie-chart';
import { Card as Card2, CardContent as CardContent2, CardActions as CardActions2 } from '@mui/material';
import { SvgIcon as SvgIcon2 } from '@mui/material';
import {
  Box,
  Container,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
  useTheme, Button, CardActions
} from '@mui/material';

// Sample data
// const sampleData = [
//   { id: 1, title: 'Total Drivers', description: '34' },
//   { id: 3, title: 'Total atendant', description: '6' },
//   { id: 2, title: 'Fuel conseption', description: '34343 L' },
// ];
const sampleData2 = [
  { name: '2010', value: 400 },
  { name: '2011', value: 300 },
  { name: '2012', value: 200 },
  { name: '2013', value: 278 },
  { name: '2014', value: 189 },
];
// const sampleData3 = [
//   { title: 'Item 1', value: 10, color: '#E38627' },
//   { title: 'Item 2', value: 15, color: '#C13C37' },
//   { title: 'Item 3', value: 20, color: '#6A2135' },
// ];
function OverviewUser() {
  const {userCountByOffice} = React.useContext(UserContext);

  return (
    <>
     <Card  sx={{
                // flexGrow: 1,
                // height: '100vh',
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                borderRadius: "10px",
                border: "none",
                transition: "all 0.3s ease-in-out",
                '&:hover': {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }
              }}>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{
                    fontWeight: "bold",
                    color: "#000",
                }} variant="h6" >
                    Staff Per Office
                </Typography>

                <Button
                      disabled ={true}
                    // onClick={() => navigate('/app/cars')}
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <EastIcon />
                        </SvgIcon>
                    )}
                    size="small"
                    variant="text"
                >
                    View all
                </Button>
            </CardActions>
            <CardContent>
    {/* <Container> */}
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {sampleData.map((item) => (
          <Card key={item.id} sx={{ flexGrow: 1, minWidth: 200 }}>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box> */}
      {/* {userCountByOffice ||'aaaaaaa'} */}

      <Box sx={{ mt: 10,mr:5 }}>
        <BarChart
          width={550}
          height={300}
          data={userCountByOffice}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#008ffb" />
        </BarChart>
      </Box>
     
      {/* <Box sx={{ mt: 0 }}>
        <PieChart
        sx={{ mt: 0 }}
        radius={20}
          data={sampleData3}
          lineWidth={30}
          // label={({ dataEntry }) => `\${Math.round(dataEntry.percentage)}%`}
          labelStyle={{
            fontSize: '2px',
            fontFamily: 'sans-serif',
          }}
        />
      </Box> */}
    {/* </Container> */}
    </CardContent>
        </Card>
    </>
  );
}

export default OverviewUser;