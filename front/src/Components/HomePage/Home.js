import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';


const Home = () => {
    return (
       <div>
        <section id="/">
                  <Navbar />
                 <Header />
                 </section>
       
                         <section id="services">
                                  <Services />
                                 </section>
                                                <section id="gallery">
                                                    <Gallery />
                                                </section>
                                                                        <section id="about">
                                                                        <About />
                                                                        </section>
                                                                                        <section id="contact">
                                                                                            <Contact />
                                                                                        </section>
                                                                               
                                                         
                                 <Footer />
       </div>
    )
}

export default Home

