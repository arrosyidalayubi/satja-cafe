import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <div className="grow">
        <Hero />
        <Menu />
        <About />
      </div>

      <Footer />
    </main>
  );
}

export default App;