import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import UserTab from "./user/UserTab"
import Department from "./department/Department"
import Office from "./office/Office"
import Position from './position/Position';
import Hrdashboadr from './Hrdashboadr'
import Country from './country/Country';
import   {useMediaQuery,} from "@mui/material";


function HRgeneral() {
  const isSmallScreen = useMediaQuery('(min-width:600px)');
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Box sx={{ width: '100%', typography: 'body1', ml: 5 }}>
      <TabContext value={value} color="#1c2536" sx={{ display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,   
}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="dashbord" value="1"  sx={{ color: "#1c2536" }}/>
            <Tab label="Users" value="2" />
            <Tab label="Position" value="3" />
            <Tab label="Department" value="4" />
            <Tab label="Office" value="5" />
            <Tab label="country" value="6" />

            </TabList>
        </Box>
        <TabPanel value="1"><Hrdashboadr/> </TabPanel>
        <TabPanel value="2"><UserTab /></TabPanel>
        <TabPanel value="3"><Position /></TabPanel>
        <TabPanel value="4"><Department /></TabPanel>
        <TabPanel value="5"><Office /></TabPanel>
        <TabPanel value="6"><Country /></TabPanel>
        </TabContext>
    </Box>
    </>
    )
}

export default HRgeneral

