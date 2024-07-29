
// import { useTable } from 'react-table';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled components for consistent styling
// const StyledTableContainer = styled(TableContainer)`
//   margin-top: 20px;
//   animation: fadeIn 2s;
//   background-color: rgba(255, 255, 255, 0.9); /* White background with opacity */

//   @keyframes fadeIn {
//     from { opacity: 0; }
//     to { opacity: 1; }
//   }

//   max-width: 80%; /* Adjust maximum width as needed */
//   margin: 0 auto; /* Center the table horizontally */
// `;

// const StyledTableCell = styled(TableCell)`
//   background-color: #f5f5f5; /* Light grey background */
//   color: #333; /* Dark grey text */
//   text-align: center;
//   font-weight: bold;
//   font-size: 1.1rem; /* Increase font size */

//   @media (max-width: 600px) {
//     display: none; /* Hide header cells on mobile */
//   }
// `;

// const StyledTableRow = styled(TableRow)`
//   &:hover {
//     background-color: #e0e0e0; /* Light grey background on hover */
//   }
//   transition: background-color 0.3s;

//   @media (max-width: 600px) {
//     display: block; /* Display rows as block elements on mobile */
//     margin-bottom: 20px;
//   }
// `;

// const FlexTableCell = styled(TableCell)`
//   text-align: center;

//   @media (max-width: 600px) {
//     display: flex; /* Display cells as flex items on mobile */
//     justify-content: space-between;
//     padding: 8px;
//     border-bottom: 1px solid #ccc;
//     font-size: 0.9rem;
//   }
// `;

// const MobileTableCellLabel = styled(Typography)`
//   font-weight: bold;
//   margin-right: 10px;
//   color: #333;
// `;

// const MobileTableCellContent = styled(Typography)`
//   text-align: right;
//   color: #333;
// `;

// // Data for tables
// const data = [
//   { 
//     day: 'Thursday', 
//     groupSinging: '5:15 PM - 6:00 PM', 
//     venue: '4785 Walker Road, Ontario, Canada',
//     mapLink: 'https://maps.app.goo.gl/Qt3MPkvoMC95NYhb6'
//   },
//   { 
//     day: 'Saturday', 
//     groupSinging: '11:15 AM - 12:00 PM', 
//     venue: '4785 Walker Road, Ontario, Canada',
//     mapLink: 'https://maps.app.goo.gl/Qt3MPkvoMC95NYhb6'
//   },
//   { 
//     day: 'Sunday', 
//     groupSinging: '11:15 AM - 12:00 PM', 
//     venue: 'Hindu Mandir and Culture Center',
//     mapLink: 'https://maps.app.goo.gl/wewGjqyBCF7oePBQA'
//   }
// ];

// const flexData = [{
//   day: 'AnyDay',
//   groupSinging: 'Flexible',
//   venue: 'Online',
//   mapLink: ''
// }];

// // Merged data with a single entry for One on One Classes
// const mergedData = [
//   ...data.map(row => ({ ...row, type: 'Group Classes' })),
//   ...flexData.map(row => ({ ...row, type: 'One on One Classes' }))
// ];

// // Column definitions for react-table
// const columns = [
//   { Header: 'Day', accessor: 'day' },
//   { Header: 'Class Type', accessor: 'type' },
//   { Header: 'Class Time', accessor: 'groupSinging' },
//   { Header: 'Venue', accessor: 'venue' },
//   { 
//     Header: 'Map', 
//     accessor: 'mapLink', 
//     Cell: ({ value }) => value ? <a href={value} target="_blank" rel="noopener noreferrer">View Map</a> : 'N/A' 
//   }
// ];

// function ClassTimings() {
//   // Using react-table hooks to manage table state
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow
//   } = useTable({ columns, data: mergedData });

//   return (
//     <div style={{ position: 'relative', marginTop: '20px', marginBottom: '20px' }}>
//       <StyledTableContainer component={Paper}>
//         <Table {...getTableProps()}>
//           <TableHead>
//             {headerGroups.map(headerGroup => (
//               <TableRow {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <StyledTableCell {...column.getHeaderProps()}>
//                     {column.render('Header')}
//                   </StyledTableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHead>
//           <TableBody {...getTableBodyProps()}>
//             {rows.map((row, index) => {
//               prepareRow(row);
//               return (
//                 <StyledTableRow {...row.getRowProps()} key={index}>
//                   {row.cells.map(cell => (
//                     <FlexTableCell {...cell.getCellProps()} key={cell.column.id}>
//                       {/* <MobileTableCellLabel>{cell.column.Header}</MobileTableCellLabel> */}
//                       <MobileTableCellContent>{cell.render('Cell')}</MobileTableCellContent>
//                     </FlexTableCell>
//                   ))}
//                 </StyledTableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </StyledTableContainer>
//     </div>
//   );
// }

// export default ClassTimings;

import React from 'react';
import { useTable } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
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

  @media (max-width: 600px) {
    display: none; /* Hide header cells on mobile */
  }
`;

const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: #e0e0e0; /* Light grey background on hover */
  }
  transition: background-color 0.3s;

  @media (max-width: 600px) {
    display: block; /* Display rows as block elements on mobile */
    margin-bottom: 20px;
  }
`;

const FlexTableCell = styled(TableCell)`
  text-align: center;

  @media (max-width: 600px) {
    display: flex; /* Display cells as flex items on mobile */
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    font-size: 0.9rem;
  }
`;

const MobileTableCellLabel = styled(Typography)`
  font-weight: bold;
  margin-right: 10px;
  color: #333;
`;

const MobileTableCellContent = styled(Typography)`
  text-align: right;
  color: #333;
`;

const WhatsAppButton = styled('a')`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    background-color: #1da851;
  }
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

const flexData = [{
  day: 'AnyDay',
  groupSinging: 'Flexible',
  venue: 'Online',
  mapLink: ''
}];

// Merged data with a single entry for One on One Classes
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
                <StyledTableRow {...row.getRowProps()} key={index}>
                  {row.cells.map(cell => (
                    <FlexTableCell {...cell.getCellProps()} key={cell.column.id}>
                      <MobileTableCellContent>{cell.render('Cell')}</MobileTableCellContent>
                    </FlexTableCell>
                  ))}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <WhatsAppButton href="https://wa.me/12269750387" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </WhatsAppButton>
    </div>
  );
}

export default ClassTimings;

