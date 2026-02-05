import { Routes, Route } from "react-router-dom";

import Home from "./Pages/MainPage/Home";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Mission from "./Pages/MainPage/Mission";
import Features from "./Pages/MainPage/Features";
import Terms from "./Pages/Terms/Terms";
import Terms2 from "./Pages/Terms/Terms2";
import Trust from "./Pages/MainPage/Trust";
import Contact from "./Pages/MainPage/Contact";
import Privacy from "./Pages/Privacy/Privacy";
import ScrollToTop from "./Components/ScrollToTop";
import AccountDelete from "./Components/AccountDelete";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/features" element={<Features />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms2" element={<Terms2 />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/account-delete" element={<AccountDelete />} />
      </Routes>
    </>
  );
}

export default App;
