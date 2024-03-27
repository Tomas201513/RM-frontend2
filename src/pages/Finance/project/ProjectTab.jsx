import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import Project from "./Project"

import InactiveProject from './InactiveProject'

function ProjectTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1', ml: 3, mb:0 }}>
      <TabContext value={value}>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Active" value="1" />
            <Tab label="Inactive" value="2" />
           

            </TabList>
        {/* </ Box> */}
        <TabPanel value="1"><Project /> </TabPanel>
        <TabPanel value="2"><InactiveProject /></TabPanel>
       
        </TabContext>
    </Box>
    </>
    )
}
export default ProjectTab