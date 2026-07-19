import { Hero } from './components/Hero';
// import { About } from './components/About';
import { Menu } from './components/Menu';

function App() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-amber-200 selection:text-amber-900">
      {/* Navigasi / Header bisa diletakkan di sini */}
      
      <Hero />
      <Menu />

      {/* 
        Komponen section selanjutnya akan di-render di bawah Hero 
        <About />
        <Footer />
      */}
    </main>
  );
}

export default App;