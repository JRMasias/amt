import './App.css';
import Navbar from './components/navigation/Navbar';
import Slideshow from './components/slideshow/Slideshow';

function App() {

  return (
    <main className="h-screen max-w-300 m-auto antialiased tracking-wide">
      <Navbar />
      <Slideshow />
    </main>
  );
}

export default App;
