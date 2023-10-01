import Footer from "../components/Footer";
import Header from "../components/Header/index";
import Books from "../components/Sections/Books";
import Contact from "../components/Sections/Contact";
import Functions from "../components/Sections/Functions";
import Projects from "../components/Sections/Projects";

function App() {
  return (
    <div>
      <Header />
      <Functions />
      <Projects />
      <Books />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
