// import { Signup } from './pages/signup/signup';

import './App.css';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { Routes, Route} from "react-router-dom";
import { Form } from './components/Form';
import Book from './components/Book';
import Home from './pages/home';
import Profile from './pages/profile';
import Landing from './pages/landing';

function App() {
  return (
    // <div>
    //   <Signin></Signin>
    //   {/* <Signup /> */}
    //   {/* <select >
             
    //             </select> */}
    // </div>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    // <Form/>
    // <Book/>
    // <Home/>
  );
}

export default App;
