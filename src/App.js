import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/Speechtotext';
import Groups from './components/Groups';
import Topnav from './components/Topnav';
import T2s from './components/TextTospeech';
import './styles.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisabilityForm from './components/DisabilityForm';
import Bigcard from './components/Bigcard';
function App() {
  return (
<Router>
    <Routes>
      <Route path="/" element={<Topnav/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/groups" element={<Groups/>} />
      <Route path="/topnav" element={<HomePage/>} />
      <Route path="/ts" element={<T2s/>} />
      <Route path="/form" element={<DisabilityForm/>} />
      <Route path="/cardbig" element={<Bigcard/>} />
 
      
    
    </Routes>
  </Router>
  );
}

export default App;
