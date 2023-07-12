import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';
import Add from './components/dashboard/add';
import Profile from './components/dashboard/profile';
function App() {

  return (
    <div className='container'>
    <BrowserRouter>
      <Sidebar />
      <Routes>
          <Route path='/dashboard' Component={Dashboard} />
          <Route path='/New' Component={Add} />
      </Routes>
      <Profile />
    </BrowserRouter>
    </div>
  );
}

export default App;
