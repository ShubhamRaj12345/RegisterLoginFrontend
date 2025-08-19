
import './App.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'

function App() {
  return (
   <> 
   <h1>This is a home page </h1>
  <BrowserRouter>
 <Routes>
<Route path="/login" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
 </Routes>


  </BrowserRouter>
  
    </>
   
  );
}

export default App;
