import React from 'react';
import Pic from 'src/assets/uc.png'
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material'; 
                                                                                                                                                                                
const Procurementdashbord = () => {
 
  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '50vw' }}>


<img src={Pic} alt="Wavy" style={{ width: '60%', objectFit: 'cover' }} />


</Box>
    </>
  );
};

export default Procurementdashbord;