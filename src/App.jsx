import React from 'react' ;
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import  SignUpSeeker  from './Auth/SignUpSeeker';
import  SignUpCenter  from './Auth/SignUpCenter';
import  SignIn  from './Auth/SignIn';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/signupSeeker' element={<SignUpSeeker/>} />
        <Route path='/signupCenter' element={<SignUpCenter />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </Router>
  )
};
export default App 