import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import { Header, About, Portfolio, Contact, Resume, Footer } from './components';
import ParticlesBackground from "./scenes/global/ParticlesBackground";

const App = () => {
  const [page, setPage] = useState('portfolio');

  return <>
    <ParticlesBackground />
    <Header setPage = {setPage} />

    {
      page === 'about' ?
        <About /> :
      page === 'portfolio' ?
        <Portfolio /> :
      page === 'contact' ?
        <Contact /> : <Resume />
    }

    <Footer />
  </>
}


export default App;
