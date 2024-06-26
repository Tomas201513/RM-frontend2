import { SvgIcon } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanIcon from '@mui/icons-material/Lan';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'; import GroupIcon from '@mui/icons-material/Group';
import RouterIcon from '@mui/icons-material/Router';

export const adminItems = [
  {
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <DashboardIcon />
      </SvgIcon>
    )
  },
  {
    title: 'HR',
    path: '/app/hr',
    icon: (
      <SvgIcon fontSize="small">
        <GroupIcon />
      </SvgIcon>
    )
  } ,{
    title: 'Finance',
    path: '/app/finance',
    icon: (
      <SvgIcon fontSize="small">
        <AccountBalanceWalletIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Logistics',
    path: '/app/logistics',
    icon: (
      <SvgIcon fontSize="small">
        <LocalShippingIcon />
      </SvgIcon>
    )
  },
  {
    title: 'IMS',
    path: '/app/it',
    icon: (
      <SvgIcon fontSize="small">
        <RouterIcon />
      </SvgIcon>
    )
  }
 
  ,
  {
    title: 'Detail',
    path: '/app/detail',
    icon: (
      <SvgIcon fontSize="small">
        <LanIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Projects',
  //   path: '/app/projects',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <GroupIcon />
  //     </SvgIcon>
  //   )
  // },
 
  

];

export const attendantItems = [
  {
    title: 'Detail',
    path: '/app/detail',
    icon: (
      <SvgIcon fontSize="small">
        <LanIcon />
      </SvgIcon>
    )
  }
];