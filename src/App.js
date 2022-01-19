import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import { UserProvider } from './userContext';

function App() {
  return (
    <UserProvider>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="card/:id" element={<Card />} />
        </Routes>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
    </UserProvider>
  );
}

export default App;
