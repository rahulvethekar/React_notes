import Nav from "./components/Nav";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Products from "./components/Products";
import Addproduct from "./components/Addproduct";
import Editproduct from "./components/Editproduct";
import MyCallback from "./components/MyCallback";
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
              <Route path="/products" element={<Products />}/>
              <Route path="/addproduct" element={<Addproduct/>}/>
              <Route path="/callback" element={<MyCallback/>}/>
              <Route path="/editproduct/:id" element={<Editproduct />}/>
           </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
