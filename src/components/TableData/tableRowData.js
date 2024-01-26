import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

const TableRowData = props => {
     const {data, setData} = props

     const deleteAction = (index) => {
          const newData = [...data];
          newData.splice(index, 1);
          setData(newData);
     }

     const rowHTML = data.map((cell, index) => {
          const name = cell.Name;
          const age = cell.Age;
          const gender = cell.Gender;
          const studentClass = cell.Class;

          return <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{age}</TableCell>
                    <TableCell align="right">{gender}</TableCell>
                    <TableCell align="right">{studentClass}</TableCell>
                    <TableCell align="right"><Button variant="outlined" onClick={() => deleteAction(index)}>Delete</Button></TableCell>
                </TableRow>
     });

     return rowHTML;
}

export default TableRowData