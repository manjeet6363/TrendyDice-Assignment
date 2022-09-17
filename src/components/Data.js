// import React from 'react'
// import { useState, useEffect } from 'react'
// import DataTable from 'react-data-table-component'
// import User from './User'

// export default function Data() {
//     const [users, setUsers] = useState([])

//     const columns = [
//         {
//             name: "First Name",
//             selector: (row) => row.first_name
//         },
//         {
//             name: "Last Name",
//             selector: (row) => row.last_name
//         },
//         {
//             name: "Email id",
//             selector: (row) => row.email_id
//         },
//         {
//             name: "Fee Payment",
//             selector: (row) => row.is_paid
//         },
//     ]

//     useEffect(() => {
//         const getDetails = async () => {
//             const url = 'https://raw.githubusercontent.com/manjeet6363/fake-json/master/db.json';
//             const data = await fetch(url);
//             const parsedData = await data.json();
//             setUsers(parsedData.users)
//             console.log(parsedData.users)
//         }
//         getDetails();
//     }, [])
    
    
//   return (
//     <div>
//         <DataTable />
//     </div>
//   )
// }
