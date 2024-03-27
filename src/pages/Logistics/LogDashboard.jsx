import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Divider } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import Box from '@mui/material/Box';
import InventoryIcon from '@mui/icons-material/Inventory';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RouterIcon from '@mui/icons-material/Router';
import { useNavigate } from 'react-router-dom';
import MyCard from './MyCard';
import DevicesIcon from '@mui/icons-material/Devices';

const LogDashboard = () => {
  const navigate = useNavigate();

  const sx = {
    flexGrow: 1,
    mb: 5,
    mt: 2,
    
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
    transition: "all 0.3s ease-in-out",
    '&:hover': {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }
  }
  return (
  <>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: '15%', mr: '1%', mb: '5%',ml:'4%', height: '30%'}}>
<Card sx={sx}>
      <Button onClick={() => { navigate('/app/general') }}  
      sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },}} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}> 

          <DevicesIcon sx={{fontSize: 100}} />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Asset Management
          </Typography>
          <Divider />
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    <Card sx={sx}>
      <Button 
      onClick={() => { navigate('/app/procurement') }} 
        sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}> 

          <ShoppingCartIcon  sx={{fontSize: 100}} />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Procurement Management
          </Typography>
          <Divider />
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    <Card sx={sx}>
      <Button 
      // onClick={() => { navigate('/app/general') }} 
        sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}> 

          <FlightIcon  sx={{fontSize: 100, color: '#bdbdbe'}} />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Transport Management
          </Typography>
          <Divider />
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    <Card sx={sx}>
      <Button 
      // onClick={() => { navigate('/app/general') }}
         sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}> 

          <InventoryIcon  sx={{fontSize: 100, color: '#bdbdbe'}} />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Stock Management

          </Typography>
          <Divider />
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    <Card sx={sx}>
      <Button 
      // onClick={() => { navigate('/app/general') }}  
       sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5 }}> 

          <DeliveryDiningIcon  sx={{fontSize: 100, color: '#bdbdbe'}} />
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Delivery Management

          </Typography>
          <Divider />
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>

      
    </Box>
    
  </>
  )
}

export default LogDashboard



