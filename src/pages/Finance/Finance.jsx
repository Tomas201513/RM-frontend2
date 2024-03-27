import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Budget from './budget/Budget';
import ProjectTab from './project/ProjectTab';
import FinanceDashboard from './FinanceDashboard';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', ml: 5  }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Dashboard" value="1" />
            <Tab label="Budget" value="2" />
            <Tab label="Project" value="3" />
            {/* <Tab label="Item Three" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value="1"><FinanceDashboard/></TabPanel>
        <TabPanel value="2"><Budget/></TabPanel>
        <TabPanel value="3"><ProjectTab/></TabPanel>
        {/* <TabPanel value="3">Item Three</TabPanel> */}
        
      </TabContext>
    </Box>
  );
}