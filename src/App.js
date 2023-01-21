import './App.css';
import Dashboard from "./pages/Dashboard";
import {NavBar} from "./components/NavBar";
import {Contact} from "./pages/Contact";
import {Project} from "./pages/Project";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Dashboard />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
}

export default App;
