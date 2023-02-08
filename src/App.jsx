// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Components
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


// CSS and assets
import './css/index.css';

function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* index */}
      <Outlet />
    </>
  );
}

export default App
