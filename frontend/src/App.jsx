import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import LandingPage from './pages/LandingPage';
import PublishPage from './pages/PublishPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <main >
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="publish" element={<PublishPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
``
