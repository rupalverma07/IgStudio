import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/herosection/Hero';
import Service from './components/service/Service';

function App() {
  return (
    <div className="container">
    <Navbar/>
    <Hero/>
    <Service/>
    </div>
  );
}

export default App;
