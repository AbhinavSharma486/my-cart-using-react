import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart';
import './styles/app.css'
import './styles/mediaquery.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
