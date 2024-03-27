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
            <StyledTableCell>donorName</StyledTableCell>
            <StyledTableCell >donorCode</StyledTableCell>
            <StyledTableCell >projectCode&nbsp;</StyledTableCell>
            <StyledTableCell >projectManager&nbsp;</StyledTableCell>
            <StyledTableCell >projectTitle&nbsp;</StyledTableCell>
            <StyledTableCell >totalBudget&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell >{row?.donorName}</StyledTableCell>
              <StyledTableCell >{row?.donorCode}</StyledTableCell>
              <StyledTableCell >{row?.projectCode}</StyledTableCell>
              <StyledTableCell >{row?.projectManager?.email}</StyledTableCell>
              <StyledTableCell >{row?.projectTitle}</StyledTableCell>
              <StyledTableCell >{row?.totalBudget}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
