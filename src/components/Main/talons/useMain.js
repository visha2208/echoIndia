import { useEffect, useState, useCallback } from 'react';
const dataJson = require('./data.json');

const useMain = () => {
     const [studentData, setStudentData] = useState([]);

     useEffect(() => {
          const fetchData = async () => {
            if(dataJson.length > 0) {
               setStudentData(dataJson);
            }
          }; 
          fetchData();
     }, [dataJson]);

     const handleAddData = useCallback(async (e, formData, handleClose) => {
          e.preventDefault();
          try {
               console.log(handleClose)
               e.preventDefault();
               const name = formData.fullname;
               const gen = formData.gender;
               const age = formData.age;
               const className = formData.class;

               const data = {
                    'Name' : name,
                    'Gender' : gen,
                    'Age' : age,
                    'Class' : className
               }

               // Update studentData state by appending the new data
               setStudentData(prevStudentData => [...prevStudentData, data]);

          } catch(e) {
               console.error(e.meassage);
          }
     });
      

     return {
          studentData,
          handleAddData,
          setStudentData
     };
}

export default useMain