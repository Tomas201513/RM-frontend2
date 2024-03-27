import React from 'react'
import StackedBarChart from './StackedBarChart';
import SubCatagoryContext from '../../context/SubCatagoryContext';
import ApexChart from './ApexChart';
import OverviewUser from './OverviewUser';
import { Box, TextField, Typography, Card } from '@mui/material';
import RecentJoined from './recentlyJoinedUser/RecentJoined';

const Hrdashboadr = () => {
  const sx = {
    flexGrow: 1,
    mb: 5,
    mt: 2,
    
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
    transition: "all 0.3s ease-in-out",
    '&:hover': {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }
  }

  const { subcatagoryData, CatsubcatagoryData } = React.useContext(SubCatagoryContext);

  if (!CatsubcatagoryData) {
    return <div>Loading data...</div>; // Or display a loading indicator
  }
  return (
    <>
    <Box sx={{ gap: 7, mt: '2%', mr: '5%'}}>
    <Card sx={sx}>

    <ApexChart />
    </Card>
    <Card sx={sx}>

    <Typography variant="h7" sx={{ mt: '5%', weight: 'bold'}}>Recently Joined</Typography>
    <RecentJoined />    </Card>

    </Box>
    </>

  )
}

export default Hrdashboadr