import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FooterContact from './components/FooterContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FooterContact />
      </main>
    </div>
  );
}

export default App;
