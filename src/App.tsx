import './App.css';
import AnimatedBanner from './components/Banner/AnimatedBanner';
import Footer from './components/Footer';
import Navbar from './components/navigation/Navbar';
import Showcase from './components/showcase/Showcase';
import Slideshow from './components/slideshow/Slideshow';
import Banner from './components/vip/Banner';

function App() {

  return (
    <main className="h-screen max-w-300 m-auto antialiased tracking-wide">
      <Navbar />
      <AnimatedBanner />
      <Slideshow />
      <Showcase />
      <Banner />
      <Footer />
    </main>
  );
}

export default App;
