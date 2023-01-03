
//control plus c quit node 
import ControlledInputs from './design-system/controlledInputs'
import ClientList from './design-system/pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
    return (
    <div className='px-6 py-12 max-w-xl mx-auto md:max-w-4xl'>
     <h1 className="text-3xl font-bold">Design System</h1> 
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<ClientList />} />
     <Route path="/create-client" element={<ControlledInputs />} />
     </Routes>
    </BrowserRouter>
    </div>
    );
}


