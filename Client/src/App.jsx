import { Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./Pages/MainPage/Home";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar"
import Mission from "./Pages/MainPage/Mission"
import Features  from "./Pages/MainPage/Features";
import Terms from "./Pages/Terms/Terms"
import Terms2 from "./Pages/Terms/Terms2"
import Sample from "./Pages/MainPage/Sample"
import Trust from "./Pages/MainPage/Trust"
import Contact from "./Pages/MainPage/Contact"
import Privacy from "./Pages/Privacy/Privacy"
import Website from "./Pages/Website"
function App() {
  return (
    <>
      <Routes>
<Route path="/" element={<Sample/> }/>
       <Route path="/footer" element={<Footer/>} />
    <Route path="/mission" element={<Mission/>} />
<Route path="/side" element={<Sidebar/>} />
<Route path="/features" element={<Features/>} />
<Route path="/terms" element={<Terms/>} />
{/* <Route path="/sample" element={<Sample/>} /> */}
<Route path="/trust" element={<Trust/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/terms2" element={<Terms2/>} />
<Route path="/privacy" element={<Privacy />}/>
<Route path="/website" element={<Website />}/>
      </Routes>

    </>
  );
}

export default App;