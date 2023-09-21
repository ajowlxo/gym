import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Plans from "./pages/Plans/Plans";
import Programs from "./pages/Programs/Programs";
import Reasons from "./pages/Reasons/Reasons";
import Testimonials from "./pages/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Home />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
