import React from "react";
import TableData from "../TableData";
import useMain from "./talons/useMain";

const Main = props => {
     const talonprops = useMain();

     const {
          studentData, 
          handleAddData, 
          setStudentData
     } = talonprops;

     return <>
          <TableData 
               rowData={studentData} 
               addRow={handleAddData} 
               setData={setStudentData}
          />
     </>
}

export default Main