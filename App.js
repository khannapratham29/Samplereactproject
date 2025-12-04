import Header from './Components/Header';
import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from './Components/Contact';

function App() {
  const features = [
    "Fast development",
    "Reusable Devlopment",
    "Scoped Styled (CSS Modules)",
    "Styled Components Support"
  ];
  
  return (
    <>
    <Header/>
    <Home 
    heading= "Welcome to out Styling demo"
    text= "this section os styled using normal CSS."/>
    <About features={features}/>
    <Contact />
    </>
  );
}

export default App;
