// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Login from './Form/Login';
import Signup from './Form/Signup';
// import Alluserdetails from './Components/Alluserdetails';
import IndividualVideo from './Components/IndividualVideo';
import GamingVideos from './Components/Gamingvideo';
import TrendingVideos from './Components/TrendingVideos';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path='/' element={<Home/>}></Route> 
      <Route exact path='/video/:id' element={<IndividualVideo/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route> 
      <Route exact path='/auth' element={<Login/>}></Route>   
      <Route exact path="/gaming" element={<GamingVideos />}></Route> 
      <Route exact path='/trending' element={<TrendingVideos/>}></Route>
      {/* <Route exact path='/registered-users' element={<Alluserdetails/>}></Route>      */}
     </Routes>
    </div>
  );
}

export default App;
