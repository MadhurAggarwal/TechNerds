import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Frontpage from './pages/Frontpage';
// import Googlemaps from './pages/Googlemaps';
// import Home from './pages/Home';
import Navbar from './pages/Navbar';
// import MyIframe from './MyIframe'

function App() {
  return (
    <div>
      {/* <MyIframe /> */}
      <Router>
      <Navbar />
      {/* <Home /> */}
      
      <Frontpage />
      {/* <Googlemaps /> */}
      </Router>
    </div>
  );
}

export default App;
