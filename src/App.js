import { Route, Routes } from 'react-router-dom';
import SignInPage from './SignInpage';
import SignUpPage from './SignUpPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignInPage />} />
      <Route path='/SignUpPage' element={<SignUpPage />} />
    </Routes>   
  );
}

export default App;
