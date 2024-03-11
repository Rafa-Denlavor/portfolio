import Footer from "../components/Footer";
import Header from "../components/Header/index";
import Books from "../components/Sections/Books";
import Functions from "../components/Sections/Functions";
import Projects from "../components/Sections/Projects";
import Services from "../components/Sections/Services";
import Performance from "../components/Sections/Performance";

function App() {
  return (
    <div>
      <Header />
      <Functions />
      <Projects />
      {/*<Performance />*/}
      <Books />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
