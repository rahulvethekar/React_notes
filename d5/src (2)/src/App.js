import Nav from "./components/Nav";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Posts from "./components/Posts";
import Users from "./components/Users";
function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <section className="container">
           <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/category/:cn" element={<Category />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/posts" element={<Posts />}/>
              <Route path="/users" element={<Users />}/>
           </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
