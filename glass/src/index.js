import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Sun1 from "./Pages/Sun1";
import Sun2 from "./Pages/Sun2";
import Sun3 from "./Pages/Sun3";
import Sun4 from "./Pages/Sun4";  
import Sun5 from "./Pages/Sun5";
import About from './Pages/About'

export default function App() {
  return (
   
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />  
          <Route path="sun1" element={<Sun1 />} />    
          <Route path="sun2" element={<Sun2 />} />    
          <Route path="sun3" element={<Sun3 />} />    
          <Route path="sun4" element={<Sun4 />} />    
          <Route path="sun5" element={<Sun5 />} />  
          <Route path="about" element={<About />} />        
        </Route>
       </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)