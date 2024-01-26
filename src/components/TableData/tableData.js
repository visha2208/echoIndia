import React, {useState} from "react";
import { Modal, Box, Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import classes from './tableData.module.css';
import TableRowData from "./tableRowData";
import DataForm from "../DataForm";

const TableData = props => {
     const {rowData, addRow, setData} = props
     
     const [open, setOpen] = useState(false);

     const handleOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

     const tableHead = (
          <TableHead>
               <TableRow>
                    <TableCell>S.No.</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Gender</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Class</TableCell>
                    <TableCell align="right">Action</TableCell>
               </TableRow>
          </TableHead>
     )

     const tableBody = (
          <TableBody>
               <TableRowData data={rowData} setData={setData}/>
          </TableBody>
     )

     return <>
          <TableContainer component={Paper} className={classes.container}>
               <Table>
                    {tableHead}
                    {tableBody}
               </Table>
          </TableContainer>
          <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-title"
               aria-describedby="modal-description"
          >
               <Box sx={{ position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '80%', // Set to a percentage for responsiveness
                              maxWidth: 400, // Set a maximum width to limit the box size
                              bgcolor: 'background.paper',
                              boxShadow: 24,
                              p: 4,
                              
                              // Responsive styles using media query
                              '@media (max-width: 600px)': {
                                   width: '90%', // Adjust for smaller screens
                              },}}>
                    <Typography id="modal-title" variant="h6" component="h2">
                         <div className={classes.modalHeader}>
                         Enter Details
                         <Button onClick={handleClose} className={classes.closeItem}>X</Button>
                         </div>
                         </Typography>
                         <Typography id="modal-description" sx={{ mt: 2 }}>
                              <DataForm handleSubmit={addRow} closeAction={handleClose}/>
                         </Typography>
               </Box>
          </Modal>
          
          <Button 
               className={classes.openModal} 
               variant="contained" 
               onClick={handleOpen}
          >+ Add Info</Button>
     </>
}

export default TableData