import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import AOS from 'aos';
import scrollFunc from './assets/functions/scroll'
import { componenstMap } from './assets/constants/componentsMap';
import './App.css';
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
  let text = "Hello, I am Okhunjon Abdusalomov. I am a Front End Developer. I have been in this IT industry for about two years now."
  function writeText() {
    document.getElementById("homeContent").innerText = text.slice(0, index);
    index++;
    if (index > text.lenght) {
      index = 0;
    }
  }
  setInterval(writeText, 50);
  
  window.onscroll = function () {
    scrollFunc('myHeader');
  };
  return (
    <div className="App" >
      {
        loading ? <Loader loading={loading} /> : (
          <React.Fragment>
            {
              componenstMap.map((item) => (
                <React.Fragment key={item.id}>
                  {item.component}
                </React.Fragment>
              ))
            }
          </React.Fragment>
        )
      }
    </div>
  );
}

export default App;
