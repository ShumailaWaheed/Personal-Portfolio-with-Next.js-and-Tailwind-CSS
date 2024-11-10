import Navbar from '@/components/Nevbar';
import HomeComponent from '@/components/pages/Home'; 
import Technical from '@/components/Technical';
import About from '@/components/pages/About';
import Services from '@/components/pages/Services';
import Contact from '@/components/pages/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <div className="mt-[120px]">
          <HomeComponent /> 
        </div>
        <Technical />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
