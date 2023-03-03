import Footer from "../components/Footer";
import Header from "../components/Header/index";
import Books from "../components/Sections/Books";
import Functions from "../components/Sections/Functions";
import Projects from "../components/Sections/Projects";
import Services from "../components/Sections/Services";

function App() {
  return (
    <div>
      <Header />
      <Functions />
      <Projects />
      <Books />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
