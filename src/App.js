import './App.css';
import Home from './pages/Home';
import Files from './pages/Files';
import History from './pages/History';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to='explorer'/>} />
          <Route path="explorer" element={<Home/>} />
          <Route path="history" element={<History/>} />
          <Route path='explorer/bucket'>
              <Route path=':id' element={<Files/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
