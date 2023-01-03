import {React, useEffect, useState } from "react";
import {Clients} from "../clients"
import {useFetch} from '../hooks/useFetch'
import {Link} from 'react-router-dom'

const ClientList = ()=> {
const response = useFetch('http://127.0.0.1/data.json');
const [data, setData] = useState([]);
useEffect(() => {
    if (response !== null) {
        setData(response);
    }
}, [response]);
return (
    <>
    <div className=' rounded-sm p-3 shadow-md w-60 mt-8 sticky mb-20 '>
     <Link to='/create-client' className='text-pink-600 hover:underline decoration-solid'> Click to Add New Client</Link>
     </div>
    <div>
     <h1 className='mt-4 mb-4 text-xl'>List of Current Clients</h1>
    <Clients clients= {data} ></Clients>
    </div>
    </>
);
}

export default ClientList;

