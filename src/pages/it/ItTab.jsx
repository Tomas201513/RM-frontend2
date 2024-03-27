import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import It from './it-01/It';
import Conn from './connectivity/Conn';
import ItDashboard from './ItDashboard'

export default function ItTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' , ml: 5 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="dashboard" value="1" />
            <Tab label="endpoint" value="2" />
            <Tab label="conectivity" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ItDashboard/></TabPanel>
        <TabPanel value="2"><It/></TabPanel>
        <TabPanel value="3"><Conn/></TabPanel>
        
        
      </TabContext>
    </Box>
  );
}