import {React} from 'react';

export const Clients = ({ clients }) => {
    return (
        <table className="shadow-md table-auto border-collapse w-full text-sm border dark:border-pink-600">
          <thead>
          <tr>
          <th className='bg-pink-700 border dark:border-pink-400 font-medium p-4 pl-8 pt-3 pb-3 text-white dark:pink-200 text-left'>Client Name</th>
          <th className='bg-pink-700 border dark:border-pink-400 font-medium p-4 pl-8 pt-3 pb-3 text-white dark:pink-200 text-left'>Operation</th>
         </tr>
         </thead>
         <tbody>
         {Object.keys(clients).map((client) => { 
          return (
                clients[client].map((data ) => { 
                //deconstruct 
                 const { id, name } = data; 
                 return (
                    <tr id={id} key={id} className='person'>
                    <td className=' border dark:border-pink-600 font-medium p-4 pl-8 pt-3 pb-3'>{name}</td>
                    <td className='border dark:border-pink-600 font-medium p-4 pl-8 pt-3 pb-3'><a style={{color:'#AA336A'}} href='/'>Edit Client</a></td>
                    </tr>
                 )
                })
          )
         })
        }
        </tbody>
        </table>
    );
}
     
  


