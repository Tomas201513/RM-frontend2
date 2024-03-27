import React from 'react'
import Box from '@mui/material/Box';

import RecentAdded from './recentlAddedProject/RecentAdded'

function FinanceDashboard() {

  return (
    <>
        <Box sx={{ gap: 7, ml: '2%',mt: '2%', mr: '2%'}}>

   <RecentAdded />

        </Box>
  </>
  )
}

export default FinanceDashboard