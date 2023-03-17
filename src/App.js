import './App.css';
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Login from './pages/Login';
import Posts from './pages/Posts';


function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/posts' element={<Posts/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
    </div>
  );
}

export default App;
