import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import Timeline from "./components/Timeline";
import {Contact} from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Timeline/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    );
}

export default App;
