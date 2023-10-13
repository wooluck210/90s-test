import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>}></Route>
          <Route path={'/signup'} element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
