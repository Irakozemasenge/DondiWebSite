import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Administration from "./pages/Administration";
import Services from "./pages/Services";
import Agriculture from "./pages/Agriculture";
import Politique from "./pages/Politique";
import Communaute from "./pages/Communaute";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/politique" element={<Politique />} />
            <Route path="/communaute" element={<Communaute />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
