import './App.css';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/layout/AppLayout';
import Blank from './pages/Blank';
import Appointment from './pages/Appointment';
import Dashboard from './pages/Dashboard';
// import Maps from './pages/Maps';
import Diagnosis from './pages/Diagnosis';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/Pharmacies' element={<Blank />} />
                    <Route path='/Appointments' element={<Appointment />} />
                    <Route path='/Medications' element={<Blank />} />
                    <Route path='/Diagnosis' element={<Diagnosis />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
