import React from 'react';
import StackedBarChart from './StackedBarChart';
import SubCatagoryContext from '../../../context/SubCatagoryContext';
import CatagoryContext from '../../../context/CatagoryContext';
import { Card, Box, Typography } from '@mui/material';
import RecentJoined from './recentlyJoinedUser/RecentJoined';

const Assetdashbord = () => {
  const { subcatagoryData, CatsubcatagoryData } = React.useContext(SubCatagoryContext);
  const { catagoryData } = React.useContext(CatagoryContext);
  if (!CatsubcatagoryData || !catagoryData) {
    return <div>Loading data...</div>; // Or display a loading indicator
  }
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
  const sy = {
    flexGrow: 1,
    mb: '5%',
    mt: '5%',
    
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
    transition: "all 0.3s ease-in-out",
    '&:hover': {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }
  }
  return (
    <>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2,  height: '30%'}}>

        {/* {JSON.stringify(CatsubcatagoryData)}  */}
      {Object.entries(CatsubcatagoryData.categorizedData).map(([category, subcategories]) => (
        <Card sx={sy}>
        <StackedBarChart
        key={category}
        category={category}
        subcategories={subcategories}
        />
        </Card>
        
        
      ))}
    </Box>
      <Card sx={sx}>

<Typography variant="h7" sx={{ mt: '5%', weight: 'bold'}}>Recently Added</Typography>
<RecentJoined />    </Card>

    </>
  );
};

export default Assetdashbord;