import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Loader from './components/Loader';
import MyServices from './components/MyServices';
import Statistics from './components/Statistics';
import AOS from 'aos';
import Experience from './components/Experience';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import writeText from './assets/functions/typingEffect';
function App() {
  // loader
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  // aos init
  useEffect(() => {
    AOS.init();
  }, [])
  // writing text
    let index = 0
    let text = "Hello, I am Okhunjon Abdusalomov. I have been in this IT industry for about two years now."
    function writeText() {
      document.getElementById("homeContent").innerText = text.slice(0, index);
      index++;
      if (index > text.lenght) {
        index = 0;
      }
    }
    setInterval(writeText, 50);
  return (
    <div className="App" >
      {
        loading ? <Loader loading={loading} /> : (
          <>
            <Header />
            <Home />
            <About />
            <MyServices />
            <Statistics />
            <Experience />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        )
      }


    </div>
  );
}

export default App;
