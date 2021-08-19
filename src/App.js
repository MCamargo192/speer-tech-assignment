import { Fragment } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Switcher from './Components/Switcher/Switcher';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Switcher />
    </Fragment>
  );
}

export default App;
