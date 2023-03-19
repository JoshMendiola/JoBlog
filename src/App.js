import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from "./pages/Create";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import SideBar from "./components/SideBar";
import MusicHome from "./pages/MusicHome";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <SideBar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}> </Route>
                        <Route path="/create" element={<Create/>}> </Route>
                        <Route path="/blog/:id" element={<Blog/>}> </Route>
                        <Route path="/music" element={<MusicHome/>}> </Route>
                        <Route path="*" element={<NotFound/>}> </Route>
                    </Routes>
                </div>
            </div>
        </Router>
      );
}

export default App;
