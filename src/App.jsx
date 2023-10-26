
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import WatcHistory from './pages/WatcHistory';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='home' element={<Home />} />
        <Route path='watchhistory' element={<WatcHistory/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
