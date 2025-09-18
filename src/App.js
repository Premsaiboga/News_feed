import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Navbar from './companents/Navbar';
import NewsCards from './companents/News_cards';
import About from './companents/About';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='Container my-3 mx-10'>
        <Routes>
          <Route path="/" element={<NewsCards />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
