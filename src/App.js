import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from "./pages/Create";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}> </Route>
                        <Route path="/create" element={<Create/>}> </Route>
                        <Route path="/blog/:id" element={<Blog/>}> </Route>
                        <Route path="*" element={<NotFound/>}> </Route>
                    </Routes>
                </div>
            </div>
        </Router>
      );
}

export default App;
