import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Intro from './Components/intro';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{backgroundColor:"#87CEFA"}}>
      <div class="d-flex justify-content-around">
          <div >
            <Intro></Intro>
          </div>

          <div>
          <Login></Login>
          </div>
      </div>
    </div>
  );
}

export default App;
