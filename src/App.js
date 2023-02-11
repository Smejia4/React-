import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome';
import { Services } from './components/pages/Services/Services';
import { AboutUs } from './components/pages/AboutUs/AboutUs';
import { ContactUs } from './components/pages/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
