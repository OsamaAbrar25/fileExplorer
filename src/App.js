import './App.css';
import Home from './pages/Home';
import Files from './pages/Files';

function App() {
  return (
    <div>
      <div className="tabs flex justify-center">
              <a className="tab tab-lifted tab-active">Explorer</a>
              <a className="tab tab-lifted">History</a>
      </div>
      <Home/>
      {/* <Files/> */}
    </div>
  );
}

export default App;
