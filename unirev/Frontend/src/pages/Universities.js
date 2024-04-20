import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Universities() {
  const universityData = [
    { name: 'Harvard University', ranking: 1, credits: '120', costing: '$47,000' },
    { name: 'Stanford University', ranking: 2, credits: '120', costing: '$46,000' },

  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>University Name</TableCell>
            <TableCell align="right">Ranking</TableCell>
            <TableCell align="right">Credits</TableCell>
            <TableCell align="right">Costing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {universityData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.ranking}</TableCell>
              <TableCell align="right">{row.credits}</TableCell>
              <TableCell align="right">{row.costing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Universities;
