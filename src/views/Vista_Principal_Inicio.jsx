import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Vista_Principal_Inicio() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Cerámica Antonio González";

        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Need a slight timeout to ensure inner components are rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 150);
            }
        } else {
            // If no hash, scroll to top
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [location]);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Categories />
                <About />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
