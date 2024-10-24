
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './index.css'
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
    <Toaster /> 
  </RecoilRoot>

);
