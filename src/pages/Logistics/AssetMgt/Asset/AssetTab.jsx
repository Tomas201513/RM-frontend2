import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import Asset from "./Asset"
import InactiveAsset from './InactiveAsset';


function AssetTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Active" value="1" />
            <Tab label="Inactive" value="2" />
           

            </TabList>
        {/* </ Box> */}
        <TabPanel value="1"><Asset /> </TabPanel>
        <TabPanel value="2"><InactiveAsset /></TabPanel>
       
        </TabContext>
    </Box>
    </>
    )
}
export default AssetTab