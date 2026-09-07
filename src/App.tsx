import './App.css';
import AnimatedBanner from './components/Banner/AnimatedBanner';
import Navbar from './components/navigation/Navbar';

function App() {

  return (
    <main className="h-screen max-w-300 m-auto antialiased tracking-wide">
      <Navbar />
      <AnimatedBanner />
    </main>
  );
}

export default App;
