import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blog from './Components/Blog/Blog';
import AboutUS from './Components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <br />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/aboutus" element={<AboutUS></AboutUS>}></Route>
      </Routes>
    </div>
  );
}

export default App;
