import './App.css';
import AnimatedBanner from './components/Banner/AnimatedBanner';
import Navbar from './components/navigation/Navbar';
import Showcase from './components/sideshow/Showcase';
import Slideshow from './components/slideshow/Slideshow';

function App() {

  return (
    <main className="h-screen max-w-300 m-auto antialiased tracking-wide">
      <Navbar />
      <AnimatedBanner />
      <Slideshow />
      <Showcase />
    </main>
  );
}

export default App;
