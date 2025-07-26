import { Route, Routes } from "react-router-dom";
// import "./index.css";
import Home from "./Pages/MainPage/Home";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar"
import Mission from "./Pages/MainPage/Mission"
import Features  from "./Pages/MainPage/Features";
import Terms from "./Pages/Terms/Terms"
import Sample from "./Pages/Sample"
function App() {
  return (
    <>
      <Routes>
<Route path="/" element={<Home/> }/>
       <Route path="/footer" element={<Footer/>} />
    <Route path="/mission" element={<Mission/>} />
<Route path="/side" element={<Sidebar/>} />
<Route path="/features" element={<Features/>} />
<Route path="/terms" element={<Terms/>} />
<Route path="/sample" element={<Sample/>} />
      </Routes>

    </>
  );
}

export default App;