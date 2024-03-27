import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import useResponsive from 'src/hooks/useResponsive';
import { Logo } from 'src/components/logo';
// import { Scrollbar } from 'src/components/scrollbar';
// import { Scrollbar } from '../../components/scrollbar';
import { adminItems, attendantItems } from './config';
import { SideNavItem } from './side-nav-item';
import AuthContext from "src/context/AuthContext";


export const SideNav = ({ open, onClose, setOpenNav, openNav }) => {
  const { userDetail } = React.useContext(AuthContext);

  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");

  const content = (
    // <Scrollbar
    //   sx={{
    //     height: '100vh',
    //     '& .simplebar-content': {
    //       height: '100vh'
    //     },
    //     '& .simplebar-scrollbar:before': {
    //       background: 'neutral.400'
    //     }
    //   }  }
    // >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',

        flexDirection: 'column',
        height: '100%',
        
      }}
    >

        {/* <Box
          href="/"
          sx={{
            // display: 'inline-flex',
            height: 50,
            width: 50,
            cursor: 'pointer',
            // flexGrow: 1,
            border: "none",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
            borderRadius: "10px",
            transition: "all 0.3s ease-in-out",
            '&:hover': {
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.06)",
              backgroundColor: 'transparent'

            }
          }}
        > */}
          {/* <Logo /> */}

        {/* </Box> */}
        <Box
          sx={{
            justifyContent: 'center',

            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            borderRadius: 1,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            mt: '15%',
            p: '10px'
          }}
          onClick={() => setOpenNav(!openNav)}
        >
          <img src="/src/assets/acted2.png" alt="logo" width="50"/>
            <Typography
              variant="h7"
              sx={{
                ml:`10px`,
                color: '#bdbdbe',
                flexGrow: 1,
                fontFamily: (theme) => theme.typography.fontFamily,
                // fontSize: 16,
                fontWeight: 600,
                lineHeight: '24px',
                whiteSpace: 'nowrap',
              }}


            >
              Resource Management
            </Typography>

        </Box>
      <Divider sx={{ borderStyle: "dashed", borderColor: '#293242' }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 1,
          py: 3
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: 'none',
            p: 0,
            m: 2
          }}
        >
          {userDetail && userDetail?.roles[0] === "admin" && (<>

            {adminItems.map((item) => {
              const active = item.path ? (pathname === item.path) : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </>)}
          {userDetail && userDetail?.roles[0] === "staff" && (<>

            {attendantItems.map((item) => {
              const active = item.path ? (pathname === item.path) : false;
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </>)}
        </Stack>
      </Box>
      <Divider sx={{ borderColor: 'neutral.700' }} />

    </Box>
    // </Scrollbar>
  );

  if (isDesktop) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            // background: 'radial-gradient(50% 50% at 50% 50%, #1B1464 0%, #090E23 100%)',
            backgroundColor: '#1c2536',
            color: "common.white",
            width: 300,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#1c2536',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};


SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setOpenNav: PropTypes.func,
  openNav: PropTypes.bool

};
