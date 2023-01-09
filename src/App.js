import './App.css';
import Home from './pages/Home';
import Files from './pages/Files';
import History from './pages/History';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path="explorer" element={<Home/>} />
            {/* <Route exact path="history" element={<Page2 />} /> */}
          <Route path="history" element={<History/>} />
          <Route path='bucket'>
              <Route path=':id' element={<Files/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
      
      {/* <Home/> */}
      {/* <Files/> */}
      {/* <History/> */}
    </div>
  );
}

export default App;
