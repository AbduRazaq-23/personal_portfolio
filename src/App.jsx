import Navbar from "./components/nav/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectsDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Skills />
              <Project />
              <About />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route path="/pdetails/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
