import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero';
import { Body } from '../components/Body';
import { Footer } from '../components/Footer';
import '../components/styles/Home.scss'

export function Home() {
  return (
    <div className="container">
        <Navbar />
        <Hero />
        <Body />
        <Footer />
    </div>
  );
}
