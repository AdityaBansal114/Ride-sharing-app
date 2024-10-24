
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './index.css'
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/authContext';


ReactDOM.createRoot(document.getElementById('root')).render(


  <AuthContextProvider>
    <App />
    <Toaster /> 
  </AuthContextProvider>


);
