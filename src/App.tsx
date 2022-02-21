
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blog from './Pages/Blog/Blog';
import Navigation from './Navigation/Navigation';
import SinglePost from './Pages/Blog/SinglePost';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/o-mnie" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


export default App;
