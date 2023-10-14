// import { Signup } from './pages/signup/signup';

import './App.css';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { Routes, Route} from "react-router-dom";

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

    </Routes>
  );
}

export default App;
