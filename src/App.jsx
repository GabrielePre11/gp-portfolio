import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Sections/Hero/Hero'
import About from './components/Sections/About/About'
import Experience from './components/Sections/Experience/Experience'
import Projects from './components/Sections/Projects/Projects'
import Footer from './components/Sections/Footer/Footer'
import BackOnTop from './components/BackOnTop/BackOnTop'
import Loader from './components/Loader/Loader'

const App = () => {
  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    };

    // If the document is already fully loaded (from cache or fast render),
    // immediately hide the loader. Otherwise, wait for the 'load' event to fire.
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // BackOnTop
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="background-wrapper">
      <div className="background-gradient"></div>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <BackOnTop isVisible={isVisible} />
    </div>
  )
}

export default App