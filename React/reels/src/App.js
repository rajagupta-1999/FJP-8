
import './App.css';
import SignUp from './components/SignUp';
import Login from "./components/Login"
import Feed from './components/Feed';
import ProfileComp from './components/profile';

import { AuthProvider } from './Context/AuthContext';


import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <AuthProvider>
       <Routes>

        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/profile' element={<ProfileComp/>}/>
       
       </Routes>
       </AuthProvider>
      </BrowserRouter>
  
     
     
    </div>
  );
}

export default App;
