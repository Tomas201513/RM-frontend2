import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactTimeAgo from 'react-time-ago'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#d32f2f',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function MyTable({data}) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow sx = {{backgroundColor: '#008ffb'}}>
            <StyledTableCell>Sub-Catagory</StyledTableCell>
            <StyledTableCell >Brands</StyledTableCell>
            <StyledTableCell >Model&nbsp;</StyledTableCell>
            <StyledTableCell >Tag&nbsp;</StyledTableCell>
            <StyledTableCell >Price&nbsp;</StyledTableCell>
            <StyledTableCell >User&nbsp;</StyledTableCell>
            <StyledTableCell >registrationTime&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row?.serialNumber}>
              <StyledTableCell >{row?.subCatagory?.subCatagory}</StyledTableCell>
              <StyledTableCell >{row?.brand}</StyledTableCell>
              <StyledTableCell >{row?.model}</StyledTableCell>
              <StyledTableCell >{row?.tag}</StyledTableCell>
              <StyledTableCell >{row?.price}</StyledTableCell>
              <StyledTableCell >{row?.currentUser?.email}</StyledTableCell>
              <StyledTableCell > <ReactTimeAgo date={row?.registrationTime} locale="en-US" /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
