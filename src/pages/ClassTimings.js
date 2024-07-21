import React from 'react';
import { useTable } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Slide } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for consistent styling
const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
  animation: fadeIn 2s;
  background-color: rgba(255, 255, 255, 0.9); /* White background with opacity */

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  max-width: 80%; /* Adjust maximum width as needed */
  margin: 0 auto; /* Center the table horizontally */
`;

const StyledTableCell = styled(TableCell)`
  background-color: #f5f5f5; /* Light grey background */
  color: #333; /* Dark grey text */
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem; /* Increase font size */
`;

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: #e0e0e0; /* Light grey background on hover */
  }
  transition: background-color 0.3s;
`;

const FlexTableCell = styled(TableCell)`
  text-align: center;
`;

// Data for tables
const data = [
  { 
    day: 'Thursday', 
    groupSinging: '5:15 PM - 6:00 PM', 
    venue: '4785 Walker Road, Ontario, Canada',
    mapLink: 'https://maps.app.goo.gl/Qt3MPkvoMC95NYhb6'
  },
  { 
    day: 'Saturday', 
    groupSinging: '11:15 AM - 12:00 PM', 
    venue: '4785 Walker Road, Ontario, Canada',
    mapLink: 'https://maps.app.goo.gl/Qt3MPkvoMC95NYhb6'
  },
  { 
    day: 'Sunday', 
    groupSinging: '11:15 AM - 12:00 PM', 
    venue: 'Hindu Mandir and Culture Center',
    mapLink: 'https://maps.app.goo.gl/wewGjqyBCF7oePBQA'
  }
];

const flexData = data.map(row => ({
  day: row.day,
  groupSinging: 'Flexible',
  venue: 'Online',
  mapLink: ''
}));

// Merged data
const mergedData = [
  ...data.map(row => ({ ...row, type: 'Group Classes' })),
  ...flexData.map(row => ({ ...row, type: 'One on One Classes' }))
];

// Column definitions for react-table
const columns = [
  { Header: 'Day', accessor: 'day' },
  { Header: 'Class Type', accessor: 'type' },
  { Header: 'Class Time', accessor: 'groupSinging' },
  { Header: 'Venue', accessor: 'venue' },
  { 
    Header: 'Map', 
    accessor: 'mapLink', 
    Cell: ({ value }) => value ? <a href={value} target="_blank" rel="noopener noreferrer">View Map</a> : 'N/A' 
  }
];

function ClassTimings() {
  // Using react-table hooks to manage table state
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: mergedData });

  return (
    <div style={{ position: 'relative', marginTop: '20px', marginBottom: '20px' }}>
      <StyledTableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <StyledTableCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <Slide direction="up" in={true} mountOnEnter unmountOnExit key={index}>
                  <StyledTableRow {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <FlexTableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </FlexTableCell>
                    ))}
                  </StyledTableRow>
                </Slide>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
}

export default ClassTimings;
