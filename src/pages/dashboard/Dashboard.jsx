import React from 'react';
import {Overview} from 'src/pages/dashboard/Overview';

import  AssetContext from 'src/context/AssetContext';
import UserContext from "src/context/UserContext";
import OfficeContext from 'src/context/OfficeContext';
import SubCatagoryContext from 'src/context/SubCatagoryContext';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import {PieChart} from 'src/pages/dashboard/PieChart';
import { Box } from '@mui/material';
import OverviewUser from './OverviewUser';


const sx = {
  flexGrow: 1,
  border: "none",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
  borderRadius: "10px",
  transition: "all 0.3s ease-in-out",
  '&:hover': {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  }
}
const Dashboard = () => {
  
  const { refetch: refetchAsset, assetData,countedAssets,sinceLastMonth } = React.useContext(AssetContext);
  const { refetch: refetchUser, userData,count } = React.useContext(UserContext);
  const { refetch: refetchOffice, officeData, recentcount } = React.useContext(OfficeContext);
  const { CAtrefetch, CatsubcatagoryData } = React.useContext(SubCatagoryContext);


  console.log("================",countedAssets?.office);
  console.log("======assetData==========",assetData);
  
  console.log("======CatsubcatagoryData==========",CatsubcatagoryData);
  React.useEffect(() => {
    if (userData) {
      // console.log('userDetail', userDetail);
      const fetchData = async () => {
        
        await refetchAsset();
        await refetchUser();  
        await refetchOffice();
        await CAtrefetch()


      };
      fetchData();
    }
  }, [userData]);

  const assetCount= assetData?.length;
  const userCount= userData?.length;
  const officeCount= officeData?.length;
  // const a = (sinceLastMonth*100)/assetCount || 0;
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
       gap: 2, mt: '5%', ml: '5%', mr: '5%', mb: 5, height: '100%' }}>
      <Overview
      title="Total Assets"
      icon={<DevicesIcon />}
      difference={sinceLastMonth}
      sx={sx}
      value = {JSON.stringify(assetCount)}
       />

      <Overview
      title="Total Users"
      icon={<PeopleIcon />}
      difference={count}
      sx={sx}
      value = {JSON.stringify(userCount)}
       />

      <Overview
      title="Total Offices"
      icon={<BusinessIcon />}
      difference={recentcount}
      positive
      sx={sx}
      value = {JSON.stringify(officeCount)}
       />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: 'row',
      flexGrow: 1, height: '50vh',
       gap: 2,  }}>
<OverviewUser/>
<PieChart
              chartSeries={countedAssets?.asset}
              labels={countedAssets?.office}
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                width : '50%',
                height: '100%',
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                borderRadius: "10px",
                border: "none",
                transition: "all 0.3s ease-in-out",
                '&:hover': {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }
              }}
            />
    
       </Box>
    </Box>

    </>
  );
};

export default Dashboard;
