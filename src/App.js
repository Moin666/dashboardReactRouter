import logo from './logo.svg';
import './App.css';
import InsertList from "./component/list"
import Dashboard from './screens/dashboar'
import SignIn from './screens/signIn'
import './App.css';
import SignUp from "./screens/signUp"
import Routing from './confiq/routing';


function App() {
  return (
    <div className="App bg-light">
      <Routing/>

    </div>
  );
}

export default App;
