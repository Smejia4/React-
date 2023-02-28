import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { HeaderHome } from './components/layouts/HeaderHome/HeaderHome';
import { Tweet } from './components/pages/Tweet/Tweet';
import { ContactUs } from './components/pages/ContactUs/ContactUs';
import { UseState } from './components/pages/UseState/UseState';

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/UseState' element={<UseState />}/>
        <Route path='/Tweet' element={<Tweet />}/>
        <Route path='/ContactUs' element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
