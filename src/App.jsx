import "./App.css";
import NavBar2 from "./components/NavBar2";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews/Reviews";
import Posts from "./components/Posts/Posts";
import Create from "./components/Create";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <div>
      <div className="flex flex-col">
        <NavBar2 />
        <div className="flex flex-row">
          <SideBar />
          <Posts />
          <Create />
          <ScrollUp />
        </div>
      </div>
      {/* <div className="flex-col">
        <Navbar />
        <Hero />
        <About />
        <Reviews />
        <Contact />
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
